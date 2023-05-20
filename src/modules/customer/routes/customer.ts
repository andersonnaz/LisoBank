import express from 'express';
import { CustomerController } from '../controllers/CustomerController';

const router = express.Router();
const customerController = new CustomerController();

router.get('/', customerController.list.bind(customerController));
router.post('/', customerController.create.bind(customerController));
router.delete('/:cpf', customerController.delete.bind(customerController));
router.get('/:cpf', customerController.findByCpf.bind(customerController));
router.put('/:cpf', customerController.updateAddres.bind(customerController));

export default router;