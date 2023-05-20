import express from 'express';
import customerRoutes from '../../../modules/customer/routes/customer';
import accountRoutes from '../../../modules/account/routes/account';
const router = express.Router();

router.use('/api/v1/customer', customerRoutes);
router.use('/api/v1/account', accountRoutes);

export default router;