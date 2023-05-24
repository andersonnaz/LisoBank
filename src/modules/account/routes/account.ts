import express from 'express';
import { AccountController } from '../controllers/AccountController';

const router = express.Router();
const accountController = new AccountController();

router.post('/', accountController.create);
router.get('/', accountController.list);
router.delete('/:accountNumber', accountController.delete);
router.get('/:accountNumber', accountController.findByAccountNumber);
router.put('/:accountNumber', accountController.updatePassword);
router.put('/withdrawal/:accountNumber', accountController.withdrawal);
router.put('/deposit/:accountNumber', accountController.deposit);
router.put('/transfer/:accountNumber', accountController.transfer);

export default router;