import { Request, Response } from "express";
import { AccountService } from "../services/AccountService";
import AccountInMemoryRepository from "../repositories/AccountInMemoryRepository";
import CustomerInMemoryRepository from "../../customer/repositories/CustomerInMemoryRepository";

export class AccountController {
    private readonly _accountService: AccountService;

    constructor(){
        this._accountService = new AccountService(AccountInMemoryRepository, CustomerInMemoryRepository);
    };

    create(request: Request, response: Response): Response{
        const {cpf, accountType, password} = request.body;
        const result = this._accountService.create(cpf, accountType, password);
        return response.status(200).json(result);        
    };

    list(request: Request, response: Response): Response{
        const result = this._accountService.list();
        return response.status(200).json(result);
    };

    findByAccountNumber(request: Request, response: Response): Response{
        const {accountNumber} = request.params;
        const result = this._accountService.findByAccountNumber(accountNumber);
        return response.status(200).json(result);
    };

    delete(request: Request, response: Response): Response {
        const {accountNumber} = request.params;
        const result = this._accountService.delete(accountNumber);
        return response.status(200).json(result);
    };
    
    updatePassword(request: Request, response: Response): Response {
        const {accountNumber} = request.params;
        const {newPassword} = request.body;
        const result = this._accountService.updatePassword(accountNumber, newPassword);
        return response.status(200).json(result);
    };

    withdrawal(request: Request, response: Response): Response {
        const {accountNumber} = request.params;
        const {money} = request.body;
        const result = this._accountService.withdrawal(accountNumber, money);
        return response.status(200).json(result);
    }
    
    deposit(request: Request, response: Response): Response {
        const {accountNumber} = request.params;
        const {money} = request.body;
        const result = this._accountService.deposit(accountNumber, money);
        return response.status(200).json(result);
    }
    
    transfer(request: Request, response: Response): Response {
        const {accountNumber} = request.params;
        const {money, accountNumberReceived} = request.body;
        const result = this._accountService.transfer(accountNumber, money, accountNumberReceived);
        return response.status(200).json(result);
    }
}