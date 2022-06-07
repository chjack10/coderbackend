import { StoredProduct } from './StoredProduct';

export interface Cart {
  id: number;
  timestamp: number;
  products: StoredProduct[];
}
