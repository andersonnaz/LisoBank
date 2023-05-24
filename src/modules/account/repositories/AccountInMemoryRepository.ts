import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { Account } from "../entities/Account";
import { AccountRepository } from "./AccountRepository";

class AccountInMemoryRepository implements AccountRepository {
    private _database: Account[] = [];

    insert(account: Account): Account {
        this._database.push(account);
        return account;
    }

    list(): Account[] {
        return this._database;
    }

    delete(accountNumber: string): string {
        const newArray = this._database.filter((account) => {
            return account.accountNumber === parseInt(accountNumber);
        })
        if(newArray.length === 0){
            throw new NotFoundError('account Not Found');
        }
        return 'deleted account';
    }

    find(accountNumber: string): Account {
        const account = this._database.find((account) => {
            return account.accountNumber === parseInt(accountNumber);
        })
        if(!account) {
            throw new NotFoundError('account not found');
        }
        return account;
    }

    update(accountNumber: string, newPassword: string): Account {
        const account = this.find(accountNumber);
        account.changePassword(parseInt(newPassword));
        return account as Account;
    }

    withdrawal(accountNumber: string, money: number): void {
        const account = this.find(accountNumber);
        if(account.balance < money) {
            throw new Error('insufficcient balance');
        }
        account.balance -= money;
    }

    deposit(accountNumber: string, money: number): void {
        const account = this.find(accountNumber);
        if(money <= 0) {
            throw new Error('Invalid deposit value');
        }
        account.balance += money;
    }
    //criar um service pra transfer
    // transfer(accountNumberSend: string, money: number, accountNumberReceived: string): void {
    //     const accountSend = this.find(accountNumberSend);
    //     if(!accountSend){
    //         throw new Error('Account send not found');
    //     }
    //     if(accountSend.balance < money) {
    //         throw new Error('insufficcient balance');
    //     }
    //     this.withdrawal(accountNumberSend, money);
    //     this.deposit(accountNumberReceived, money);
    // }
}

export default new AccountInMemoryRepository();