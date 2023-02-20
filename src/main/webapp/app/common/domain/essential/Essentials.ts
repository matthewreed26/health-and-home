import { Essential } from './Essential';

export interface Essentials {
  get(): Promise<Essential[]>;
  post(essential: Essential): Promise<void>;
}
