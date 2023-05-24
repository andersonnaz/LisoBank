import { Request, Response } from "express";
import { AccountService } from "../services/AccountService";
import AccountInMemoryRepository from "../repositories/AccountInMemoryRepository";
import CustomerInMemoryRepository from "../../customer/repositories/CustomerInMemoryRepository";
import { TransferMoneyTransaction } from "../utils/TransferMoneyTransaction";
import { AbstractController } from "../../../shared/AbstractController";

export class AccountController extends AbstractController {
    private readonly _accountService: AccountService;
    private readonly _transferMoneyTransaction: TransferMoneyTransaction;

    constructor(){
        super()
        this._accountService = new AccountService(AccountInMemoryRepository, CustomerInMemoryRepository);
        this._transferMoneyTransaction = new TransferMoneyTransaction(AccountInMemoryRepository);
    };

    create = async (request: Request, response: Response): Promise<Response> => {
        return this.handle(request, response, async () => {
            const {cpf, accountType, password} = request.body;
            return this._accountService.create(cpf, accountType, password);
        })
    };

    list = async (request: Request, response: Response): Promise<Response> => {
        return this.handle(request, response, async () => {
            return this._accountService.list();

        })
    };

    findByAccountNumber = async (request: Request, response: Response): Promise<Response> => {
        return this.handle(request, response, async () => {
            const {accountNumber} = request.params;
            return this._accountService.findByAccountNumber(accountNumber);
        })
    };

    delete = async (request: Request, response: Response): Promise<Response> => {
        return this.handle(request, response, async () => {
            const {accountNumber} = request.params;
            return this._accountService.delete(accountNumber);
        })
    };
    
    updatePassword = async (request: Request, response: Response): Promise<Response> => {
        return this.handle(request, response, async () => {
            const {accountNumber} = request.params;
            const {newPassword} = request.body;
            return this._accountService.updatePassword(accountNumber, newPassword);

        })
    };

    withdrawal = async (request: Request, response: Response): Promise<Response> => {
        return this.handle(request, response, async () => {
            const {accountNumber} = request.params;
            const {money} = request.body;
            return this._accountService.withdrawal(accountNumber, money);
        })
    };
    
    deposit = async (request: Request, response: Response): Promise<Response> => {
        return this.handle(request, response, async () => {
            const {accountNumber} = request.params;
            const {money} = request.body;
            return this._accountService.deposit(accountNumber, money);  
        })
    };
    
    transfer = async (request: Request, response: Response): Promise<Response> => {
        return this.handle(request, response, async () => {
            const {accountNumber} = request.params;
            const {money, accountNumberReceived} = request.body;
            return this._transferMoneyTransaction.transfer(accountNumber, money, accountNumberReceived);      
        })
    };
}