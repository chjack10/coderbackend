import { Router } from 'express';
import {
  deleteProduct,
  getProduct,
  postProduct,
  putProduct,
  getProducts,
} from '../controllers/products';

const router: Router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/productos', postProduct);
router.put('/:id', putProduct);
router.delete('/:id', deleteProduct);

export default router;
