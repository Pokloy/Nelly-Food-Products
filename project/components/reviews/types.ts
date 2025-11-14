export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: Date;
  updatedAt?: Date;
  helpful: number;
  verified: boolean;
  images?: string[];
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface ReviewFormData {
  rating: number;
  title: string;
  comment: string;
  images?: File[];
}