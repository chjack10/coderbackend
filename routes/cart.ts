import { Router } from 'express';
import {
  createCart,
  addToCartById,
  emptyCartById,
  deleteProductByCartId,
  getProductsByCartId,
} from '../controllers/cart';

const router: Router = Router();

router.post('/', createCart);
router.post('/:id/productos', addToCartById);
router.delete('/:id', emptyCartById);
router.delete('/:id/productos/:id_prod', deleteProductByCartId);
router.get('/:id/productos', getProductsByCartId);

export default router;
