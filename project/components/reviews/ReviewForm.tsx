"use client"

import { useState } from 'react';
import { Star, Upload, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ReviewFormData } from './types';

interface ReviewFormProps {
  onSubmit: (data: ReviewFormData) => void;
  isSubmitting?: boolean;
  productName: string;
}

export default function ReviewForm({ onSubmit, isSubmitting = false, productName }: ReviewFormProps) {
  const [formData, setFormData] = useState<ReviewFormData>({
    rating: 0,
    title: '',
    comment: '',
    images: []
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + selectedImages.length > 5) {
      alert('You can upload maximum 5 images');
      return;
    }
    setSelectedImages(prev => [...prev, ...files]);
    setFormData(prev => ({ ...prev, images: [...(prev.images || []), ...files] }));
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images?.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      alert('Please select a rating');
      return;
    }
    if (!formData.title.trim() || !formData.comment.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-6">Write a Review for {productName}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating */}
        <div>
          <Label className="text-base font-medium mb-3 block">
            Overall Rating <span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                className="p-1 hover:scale-110 transition-transform"
                onClick={() => handleRatingClick(rating)}
                onMouseEnter={() => setHoveredRating(rating)}
                onMouseLeave={() => setHoveredRating(0)}
              >
                <Star
                  className={`h-8 w-8 ${
                    rating <= (hoveredRating || formData.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  } transition-colors`}
                />
              </button>
            ))}
            <span className="ml-3 text-sm text-gray-600">
              {formData.rating > 0 && (
                <>
                  {formData.rating} star{formData.rating !== 1 ? 's' : ''}
                  {formData.rating === 5 && ' - Excellent!'}
                  {formData.rating === 4 && ' - Very Good'}
                  {formData.rating === 3 && ' - Good'}
                  {formData.rating === 2 && ' - Fair'}
                  {formData.rating === 1 && ' - Poor'}
                </>
              )}
            </span>
          </div>
        </div>

        {/* Review Title */}
        <div>
          <Label htmlFor="title" className="text-base font-medium">
            Review Title <span className="text-red-500">*</span>
          </Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Summarize your experience in a few words"
            className="mt-2"
            maxLength={100}
            required
          />
          <div className="text-xs text-gray-500 mt-1">
            {formData.title.length}/100 characters
          </div>
        </div>

        {/* Review Comment */}
        <div>
          <Label htmlFor="comment" className="text-base font-medium">
            Your Review <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="comment"
            value={formData.comment}
            onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
            placeholder="Share your thoughts about this product. What did you like or dislike? How did you use it?"
            className="mt-2 min-h-[120px]"
            maxLength={1000}
            required
          />
          <div className="text-xs text-gray-500 mt-1">
            {formData.comment.length}/1000 characters
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <Label className="text-base font-medium">
            Add Photos (Optional)
          </Label>
          <p className="text-sm text-gray-600 mb-3">
            Help others by showing the product in use (max 5 images)
          </p>
          
          <div className="flex flex-wrap gap-4">
            {selectedImages.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Upload ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            
            {selectedImages.length < 5 && (
              <label className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                <Upload className="h-6 w-6 text-gray-400" />
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            disabled={isSubmitting || formData.rating === 0}
            className="gap-2 px-8"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Review
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}