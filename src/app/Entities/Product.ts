export class Products extends Response {
  data: Product[]
}


export interface Product {
    id: number;
    name: string;
    description?: string;
    regularPrice: number;
    discountedPrice?: number;
    coverImageUrl: string;
  }