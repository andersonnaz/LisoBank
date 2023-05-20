import { Repository, TransactionRepository } from "../../../shared/database/Repository";
import { Customer } from "../../customer/entities/Customer";
import { Account, AccountType } from "../entities/Account";

export class AccountService {
    private readonly _accountRepository: Repository<Account> & TransactionRepository;
    private readonly _customerRepository: Repository<Customer>;

    constructor(accountRepository: Repository<Account> & TransactionRepository, customerRepository: Repository<Customer>){
        this._accountRepository = accountRepository;
        this._customerRepository = customerRepository;
    };

    create(cpf: string, accountType: AccountType, password: number): Account {
        const customer = this._customerRepository.find(cpf);
        const account = Account.create(cpf, accountType, password);
        customer?.addAccount(account);
        this._accountRepository.insert(account);
        return account;
    }

    list(): Account[]{
        return this._accountRepository.list();
    };

    findByAccountNumber(accountNumber: string): Account {
        const account = this._accountRepository.find(accountNumber);
        return account as Account;
    }

    delete(accountNumber: string): string {
        this._customerRepository.delete(accountNumber);
        this._accountRepository.delete(accountNumber);
        return 'deleted Account';
    }

    updatePassword(accountNumber: string, newPassword: string): Account {
        const result = this._accountRepository.update(accountNumber, newPassword);
        return result;
    }

    withdrawal(accountNumber: string, money: number): string {
        this._accountRepository.withdrawal(accountNumber, money);
        return 'withdrawal successful!';
    }

    deposit(accountNumber: string, money: number): string {
        this._accountRepository.deposit(accountNumber, money);
        return 'deposit successful!'
    }

    transfer(accountNumberSend: string, money: number, accountNumberReceived: string): string {
        this._accountRepository.transfer(accountNumberSend, money, accountNumberReceived);
        return 'transfer successful!'
    }
}