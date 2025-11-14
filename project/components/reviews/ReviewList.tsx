"use client"

import { useState } from 'react';
import { ChevronDown, Filter, Import as SortAsc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Review } from './types';
import ReviewItem from './ReviewItem';

interface ReviewListProps {
  reviews: Review[];
  onHelpful?: (reviewId: string) => void;
  onReport?: (reviewId: string) => void;
  onLoadMore?: () => void;
  hasMore?: boolean;
  isLoading?: boolean;
}

type SortOption = 'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful';
type FilterOption = 'all' | '5' | '4' | '3' | '2' | '1' | 'verified';

export default function ReviewList({ 
  reviews, 
  onHelpful, 
  onReport, 
  onLoadMore, 
  hasMore = false,
  isLoading = false 
}: ReviewListProps) {
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [filterBy, setFilterBy] = useState<FilterOption>('all');

  const sortReviews = (reviews: Review[], sortOption: SortOption): Review[] => {
    const sorted = [...reviews];
    
    switch (sortOption) {
      case 'newest':
        return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      case 'oldest':
        return sorted.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      case 'highest':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'lowest':
        return sorted.sort((a, b) => a.rating - b.rating);
      case 'helpful':
        return sorted.sort((a, b) => b.helpful - a.helpful);
      default:
        return sorted;
    }
  };

  const filterReviews = (reviews: Review[], filterOption: FilterOption): Review[] => {
    switch (filterOption) {
      case 'all':
        return reviews;
      case 'verified':
        return reviews.filter(review => review.verified);
      case '5':
      case '4':
      case '3':
      case '2':
      case '1':
        return reviews.filter(review => review.rating === parseInt(filterOption));
      default:
        return reviews;
    }
  };

  const processedReviews = sortReviews(filterReviews(reviews, filterBy), sortBy);

  const getSortLabel = (option: SortOption): string => {
    switch (option) {
      case 'newest': return 'Newest First';
      case 'oldest': return 'Oldest First';
      case 'highest': return 'Highest Rating';
      case 'lowest': return 'Lowest Rating';
      case 'helpful': return 'Most Helpful';
      default: return 'Newest First';
    }
  };

  const getFilterLabel = (option: FilterOption): string => {
    switch (option) {
      case 'all': return 'All Reviews';
      case 'verified': return 'Verified Only';
      case '5': return '5 Stars';
      case '4': return '4 Stars';
      case '3': return '3 Stars';
      case '2': return '2 Stars';
      case '1': return '1 Star';
      default: return 'All Reviews';
    }
  };

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
        <p className="text-gray-600">Be the first to share your thoughts about this product!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <SortAsc className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="highest">Highest Rating</SelectItem>
                <SelectItem value="lowest">Lowest Rating</SelectItem>
                <SelectItem value="helpful">Most Helpful</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            <Select value={filterBy} onValueChange={(value: FilterOption) => setFilterBy(value)}>
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Reviews</SelectItem>
                <SelectItem value="verified">Verified Only</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Showing {processedReviews.length} of {reviews.length} reviews
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-4">
        {processedReviews.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
            onHelpful={onHelpful}
            onReport={onReport}
          />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="text-center pt-6">
          <Button
            onClick={onLoadMore}
            variant="outline"
            disabled={isLoading}
            className="gap-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary" />
                Loading...
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Load More Reviews
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}