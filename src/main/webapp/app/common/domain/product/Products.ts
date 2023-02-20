import { Product } from './Product';

export interface Products {
  get(): Promise<Product[]>;
}
