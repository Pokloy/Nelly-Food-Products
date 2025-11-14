"use client"

import { Star, ChartBar as BarChart3 } from 'lucide-react';
import { ReviewStats as ReviewStatsType } from './types';

interface ReviewStatsProps {
  stats: ReviewStatsType;
}

export default function ReviewStats({ stats }: ReviewStatsProps) {
  const { averageRating, totalReviews, ratingDistribution } = stats;

  const getRatingPercentage = (count: number) => {
    return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center gap-6 mb-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900 mb-2">
            {averageRating.toFixed(1)}
          </div>
          <div className="flex items-center justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(averageRating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-600">
            Based on {totalReviews} reviews
          </div>
        </div>

        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1 w-12">
                <span className="text-sm font-medium">{rating}</span>
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${getRatingPercentage(ratingDistribution[rating as keyof typeof ratingDistribution])}%`
                  }}
                />
              </div>
              <div className="text-sm text-gray-600 w-8">
                {ratingDistribution[rating as keyof typeof ratingDistribution]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <BarChart3 className="h-4 w-4" />
        <span>
          {Math.round(getRatingPercentage(ratingDistribution[5] + ratingDistribution[4]))}% 
          of customers recommend this product
        </span>
      </div>
    </div>
  );
}