import { Purchase } from './purchase';

export interface Purchases {
  get(): Promise<Purchase[]>;
  post(purchase: Purchase): Promise<void>;
}
