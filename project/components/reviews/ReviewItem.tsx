"use client"

import { useState } from 'react';
import { Star, ThumbsUp, Flag, MoveHorizontal as MoreHorizontal, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Review } from './types';
import Image from 'next/image';

interface ReviewItemProps {
  review: Review;
  onHelpful?: (reviewId: string) => void;
  onReport?: (reviewId: string) => void;
}

export default function ReviewItem({ review, onHelpful, onReport }: ReviewItemProps) {
  const [isHelpfulClicked, setIsHelpfulClicked] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);

  const handleHelpful = () => {
    if (!isHelpfulClicked) {
      setIsHelpfulClicked(true);
      onHelpful?.(review.id);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const displayImages = showAllImages ? review.images : review.images?.slice(0, 3);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-200">
            {review.userAvatar ? (
              <Image
                src={review.userAvatar}
                alt={review.userName}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-primary text-white font-semibold">
                {review.userName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-gray-900">{review.userName}</h4>
              {review.verified && (
                <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  <Shield className="h-3 w-3" />
                  Verified Purchase
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600">{formatDate(review.createdAt)}</p>
          </div>
        </div>
        
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < review.rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-gray-700">
          {review.rating} out of 5 stars
        </span>
      </div>

      {/* Review Title */}
      <h3 className="font-semibold text-lg text-gray-900 mb-2">
        {review.title}
      </h3>

      {/* Review Content */}
      <p className="text-gray-700 leading-relaxed mb-4">
        {review.comment}
      </p>

      {/* Review Images */}
      {review.images && review.images.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {displayImages?.map((image, index) => (
              <div
                key={index}
                className="relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src={image}
                  alt={`Review image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            {review.images.length > 3 && !showAllImages && (
              <button
                onClick={() => setShowAllImages(true)}
                className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-600 hover:bg-gray-200 transition-colors"
              >
                +{review.images.length - 3} more
              </button>
            )}
          </div>
          {showAllImages && review.images.length > 3 && (
            <button
              onClick={() => setShowAllImages(false)}
              className="text-sm text-primary hover:underline mt-2"
            >
              Show less
            </button>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <button
            onClick={handleHelpful}
            disabled={isHelpfulClicked}
            className={`flex items-center gap-2 text-sm transition-colors ${
              isHelpfulClicked
                ? 'text-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            <ThumbsUp className={`h-4 w-4 ${isHelpfulClicked ? 'fill-current' : ''}`} />
            Helpful ({review.helpful + (isHelpfulClicked ? 1 : 0)})
          </button>
          
          <button
            onClick={() => onReport?.(review.id)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
          >
            <Flag className="h-4 w-4" />
            Report
          </button>
        </div>

        {review.updatedAt && review.updatedAt > review.createdAt && (
          <span className="text-xs text-gray-500">
            Edited {formatDate(review.updatedAt)}
          </span>
        )}
      </div>
    </div>
  );
}