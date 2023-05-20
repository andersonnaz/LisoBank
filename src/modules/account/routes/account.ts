import express from 'express';
import { AccountController } from '../controllers/AccountController';

const router = express.Router();
const accountController = new AccountController();

router.post('/', accountController.create.bind(accountController));
router.get('/', accountController.list.bind(accountController));
router.delete('/:accountNumber', accountController.delete.bind(accountController));
router.get('/:accountNumber', accountController.findByAccountNumber.bind(accountController));
router.put('/:accountNumber', accountController.updatePassword.bind(accountController));
router.put('/withdrawal/:accountNumber', accountController.withdrawal.bind(accountController));
router.put('/deposit/:accountNumber', accountController.deposit.bind(accountController));
router.put('/transfer/:accountNumber', accountController.transfer.bind(accountController));

export default router;