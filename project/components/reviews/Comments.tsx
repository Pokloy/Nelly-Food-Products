"use client"

import { useState } from 'react';
import { Review, ReviewStats as ReviewStatsType, ReviewFormData } from './types';
import ReviewStats from './ReviewStats';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { Button } from '@/components/ui/button';
import { MessageSquare, Star } from 'lucide-react';

interface CommentsProps {
  productId: string;
  productName: string;
  initialReviews?: Review[];
  initialStats?: ReviewStatsType;
  onSubmitReview?: (data: ReviewFormData) => Promise<void>;
  onHelpfulReview?: (reviewId: string) => void;
  onReportReview?: (reviewId: string) => void;
  onLoadMoreReviews?: () => void;
  hasMoreReviews?: boolean;
  isLoadingReviews?: boolean;
  allowReviews?: boolean;
  isAuthenticated?: boolean;
}

// Mock data for demonstration
const mockStats: ReviewStatsType = {
  averageRating: 4.3,
  totalReviews: 127,
  ratingDistribution: {
    5: 68,
    4: 32,
    3: 18,
    2: 6,
    1: 3
  }
};

const mockReviews: Review[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150',
    rating: 5,
    title: 'Absolutely love this tea!',
    comment: 'This organic wellness tea has become part of my daily routine. The flavor is perfectly balanced and I can really feel the difference in my energy levels. The packaging is also beautiful and keeps the tea fresh.',
    createdAt: new Date('2024-03-10'),
    helpful: 12,
    verified: true,
    images: [
      'https://images.unsplash.com/photo-1563822249-9a62765ebcef?ixlib=rb-4.0.3&w=300',
      'https://images.unsplash.com/photo-1563822249-ef66117e683f?ixlib=rb-4.0.3&w=300'
    ]
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'Michael Chen',
    rating: 4,
    title: 'Great quality, fast shipping',
    comment: 'The tea quality is excellent and arrived quickly. The only reason I\'m not giving 5 stars is that I wish there were more variety in the flavors. But overall, very satisfied with my purchase.',
    createdAt: new Date('2024-03-08'),
    helpful: 8,
    verified: true
  },
  {
    id: '3',
    userId: 'user3',
    userName: 'Emma Davis',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=150',
    rating: 5,
    title: 'Perfect for relaxation',
    comment: 'I drink this tea every evening before bed and it helps me unwind perfectly. The organic ingredients are clearly high quality and you can taste the difference. Highly recommend!',
    createdAt: new Date('2024-03-05'),
    helpful: 15,
    verified: true,
    images: [
      'https://images.unsplash.com/photo-1563822249-7a8def6dc0ae?ixlib=rb-4.0.3&w=300'
    ]
  }
];

export default function Comments({
  productId,
  productName,
  initialReviews = mockReviews,
  initialStats = mockStats,
  onSubmitReview,
  onHelpfulReview,
  onReportReview,
  onLoadMoreReviews,
  hasMoreReviews = false,
  isLoadingReviews = false,
  allowReviews = true,
  isAuthenticated = false
}: CommentsProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [stats, setStats] = useState<ReviewStatsType>(initialStats);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitReview = async (data: ReviewFormData) => {
    setIsSubmitting(true);
    try {
      if (onSubmitReview) {
        await onSubmitReview(data);
      } else {
        // Mock submission
        const newReview: Review = {
          id: Date.now().toString(),
          userId: 'current-user',
          userName: 'You',
          rating: data.rating,
          title: data.title,
          comment: data.comment,
          createdAt: new Date(),
          helpful: 0,
          verified: true,
          images: data.images?.map(file => URL.createObjectURL(file))
        };
        setReviews(prev => [newReview, ...prev]);
        
        // Update stats
        setStats(prev => ({
          ...prev,
          totalReviews: prev.totalReviews + 1,
          ratingDistribution: {
            ...prev.ratingDistribution,
            [data.rating]: prev.ratingDistribution[data.rating as keyof typeof prev.ratingDistribution] + 1
          }
        }));
      }
      setShowReviewForm(false);
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleHelpful = (reviewId: string) => {
    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ));
    onHelpfulReview?.(reviewId);
  };

  const handleReport = (reviewId: string) => {
    onReportReview?.(reviewId);
    // You might want to show a confirmation dialog here
    alert('Review reported. Thank you for helping us maintain quality.');
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MessageSquare className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
        </div>
        
        {allowReviews && isAuthenticated && (
          <Button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="gap-2"
          >
            <Star className="h-4 w-4" />
            Write a Review
          </Button>
        )}
      </div>

      {/* Review Stats */}
      <ReviewStats stats={stats} />

      {/* Review Form */}
      {showReviewForm && allowReviews && isAuthenticated && (
        <ReviewForm
          productName={productName}
          onSubmit={handleSubmitReview}
          isSubmitting={isSubmitting}
        />
      )}

      {/* Authentication Message */}
      {!isAuthenticated && allowReviews && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <p className="text-blue-800">
            <a href="/login" className="font-medium hover:underline">Sign in</a> to write a review
          </p>
        </div>
      )}

      {/* Reviews List */}
      <ReviewList
        reviews={reviews}
        onHelpful={handleHelpful}
        onReport={handleReport}
        onLoadMore={onLoadMoreReviews}
        hasMore={hasMoreReviews}
        isLoading={isLoadingReviews}
      />
    </div>
  );
}