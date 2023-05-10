import express from 'express';
import { TransactionController } from '../app/controller/TransactionController';

const router = express.Router();
const transactionController = new TransactionController();

router.put('/withdrawal/:accountNumber', transactionController.withdrawal);
router.put('/deposit/:accountNumber', transactionController.deposit);
router.put('/transfer/:accountNumber', transactionController.transfer);

export default router;