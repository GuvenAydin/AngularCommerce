export interface Product {
    Id: number;
    Name: string;
    Description?: string;
    RegularPrice: number;
    DiscountedPrice?: number;
    CoverImageUrl: string;
  }