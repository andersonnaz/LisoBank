import { Account } from "../entities/Account";
import { AccountRepository } from "../repositories/AccountRepository";



export class TransferMoneyTransaction {
    private readonly _accountRepository: AccountRepository;

    constructor(accountRepository: AccountRepository){
        this._accountRepository = accountRepository;
    };
    transfer(accountNumberSender: string, money: number, accountNumberReceiver: string){
        const accountSender = this.verifyAccount(accountNumberSender);
        const accountReceiver = this.verifyAccount(accountNumberReceiver);
        if(accountSender.balance < money) {
            throw new Error('insufficcient balance');
        }
        this._accountRepository.withdrawal(accountNumberSender, money);
        this._accountRepository.deposit(accountNumberReceiver, money);
    };

    private verifyAccount(accountNumber: string): Account {
        const account = this._accountRepository.find(accountNumber);
        if(!account){
            throw new Error(`Account ${accountNumber} not found`);
        }
        return account;
    }
}