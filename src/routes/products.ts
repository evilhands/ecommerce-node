import express from 'express';
import { getAll, getProduct, createProduct } from '../controllers/product-controller';

const router = express.Router();

router.route('/').get(getAll);

router.route('/:productId').get(getProduct)

export default router;