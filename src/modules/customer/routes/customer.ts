import express from 'express';
import { CustomerController } from '../controllers/CustomerController';

const router = express.Router();
const customerController = new CustomerController();

router.get('/', customerController.list);
router.post('/', customerController.create);
router.delete('/:cpf', customerController.delete);
router.get('/:cpf', customerController.findByCpf);
router.put('/:cpf', customerController.updateAddres);

export default router;