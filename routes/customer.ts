import express from 'express';
import { CustomerController } from '../app/controller/CustomerController';

const router = express.Router();
const customerController = new CustomerController();

router.get('/', customerController.list);
router.post('/', customerController.create);
router.delete('/:accountNumber', customerController.delete);
router.get('/:accountNumber', customerController.findByAccountNumber);
router.put('/:accountNumber', customerController.update);

export default router;