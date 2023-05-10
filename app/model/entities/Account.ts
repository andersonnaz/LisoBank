import { Customer } from "./Customer";

export class Account {
    private _accountNumber: number;
    private _password: number;
    private _balance: number;

    constructor(password: number, InitialDeposit: number){
        this._accountNumber = this.generateAccountNumber();
        this._password = password;
        this._balance = InitialDeposit;
    }

    private generateAccountNumber(): number {
        return Math.floor(Math.random() * 10000);
    }

    get balance(): number {
        return this._balance;
    }

    set balance(newBalance: number){
        this._balance = newBalance;
    }

    get accountNumber(): number {
        return this._accountNumber;
    }

    get password(): number {
        return this._password;
    }

    set password(password: number){
        this._password = password;
    }
}