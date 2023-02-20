import { Purchase } from './purchase';

export interface Purchases {
  get(): Promise<Purchase[]>;
}
