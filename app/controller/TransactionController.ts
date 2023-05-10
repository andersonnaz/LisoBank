import { Request, Response } from "express";
import { TransactionService } from "../model/services/TransactionService";

export class TransactionController {

    withdrawal(request: Request, response: Response): Response {
        const {accountNumber} = request.params;
        const {money} = request.body;
        const transactionService = new TransactionService();
        const result = transactionService.withdrawal(parseInt(accountNumber), money);
        return response.status(200).json(result);
    }
    
    deposit(request: Request, response: Response): Response {
        const {accountNumber} = request.params;
        const {money} = request.body;
        const transactionService = new TransactionService();
        const result = transactionService.deposit(parseInt(accountNumber), money);
        return response.status(200).json(result);
    }
    
    transfer(request: Request, response: Response): Response {
        const {accountNumber} = request.params;
        const {money, accountNumberReceived} = request.body;
        const transactionService = new TransactionService();
        const result = transactionService.transfer(parseInt(accountNumber), money, accountNumberReceived);
        return response.status(200).json(result);
    }
}