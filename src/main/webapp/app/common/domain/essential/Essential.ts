import { Product } from '../product/Product';
import { Purchases } from '../purchase/Purchases';

export interface Essential {
  type: string;
  assignee?: string;
  products?: Product[];
  purchases?: Purchases[];
}
