import { Router } from 'express';
import { handleDefaultRequest } from '../controllers/default';

const router: Router = Router();

router.all('/', handleDefaultRequest);

export default router;
