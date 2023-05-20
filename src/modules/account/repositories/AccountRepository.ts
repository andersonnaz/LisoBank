import { Account } from "../entities/Account";

export class AccountRepository {
    private _database: Array<Account>;

    constructor(){
        this._database = new Array<Account>;
    }

    insert(account: Account): Account {
        this._database.push(account);
        return account;
    }

    list(): Account[] {
        return this._database;
    }

    delete(accountNumber: number): string {
        const accounts = this.list();
        const index = accounts.findIndex((account) => {
           return account.accountNumber === accountNumber;
        })
        accounts.splice(index, 1);
        this._database = accounts;
        return 'Account deleted!';
    }

    updatePassword(accountNumber: number, newPassword: number): Account {
        const account = this.findAccountByAccountNumber(accountNumber);
        account.changePassword(newPassword);
        return account;
    }

    findAccountByAccountNumber(accountNumber: number): Account {
        const accounts = this.list();
        const account = accounts.find((account) => {
           return account.accountNumber === accountNumber;
        })
        return account as Account;
    }

    withdrawal(accountNumber: number, money: number): void {
        const account = this.findAccountByAccountNumber(accountNumber);
        if(account.balance < money) {
            throw new Error('insufficcient balance');
        }
        account.balance -= money;
    }

    deposit(accountNumber: number, money: number): void {
        const account = this.findAccountByAccountNumber(accountNumber);
        if(money <= 0) {
            throw new Error('Invalid deposit value');
        }
        account.balance += money;
    }

    transfer(accountNumberSend: number, money: number, accountNumberReceived: number): void {
        const accountSend = this.findAccountByAccountNumber(accountNumberSend);
        if(accountSend.balance < money) {
            throw new Error('insufficcient balance');
        }
        this.withdrawal(accountNumberSend, money);
        this.deposit(accountNumberReceived, money);
    }
}