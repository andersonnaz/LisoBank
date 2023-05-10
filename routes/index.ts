import express from 'express';
import customerRoutes from './customer';
import transactionRoutes from './transaction';
const router = express.Router();

router.use('/api/v1/customer', customerRoutes);
router.use('/api/v1/transaction', transactionRoutes);

export default router;