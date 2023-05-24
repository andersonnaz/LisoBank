import { Cpf } from "../../person/entities/Cpf";
import { ValidateAccountPasswordError } from "../error/ValidateAccountPassword";
import { ValidateAccountTypeError } from "../error/ValidateAccountTypeError";

export enum AccountType {
    SavingsAccount = "Savings Account",
    ChekingAccount = "Cheking Account",
    SalaryAccount = "Salary Account"
}

export class Account {
    private readonly _cpf: string;
    private readonly _accountNumber: number;
    private readonly _accountType: AccountType;
    private _password: number;
    private _balance: number;

    private constructor(cpf: string, accountType: AccountType, password: number){
        this._cpf = cpf;
        this._accountNumber = this.generateAccountNumber();
        this._password = password;
        this._balance = 0;
        this._accountType = accountType;
        
    }

    static create(cpf: string, accountType: AccountType, password: number): Account {
        this.validate(cpf, accountType, password);
        return new Account(cpf, accountType, password);
    }

    public changePassword(newPassword: number): void {
        this._password = newPassword;
    }

    public set balance(newBalance: number) {
        this._balance = newBalance;
    }

    public get balance(): number {
        return this._balance;
    }

    public get accountNumber(): number {
        return this._accountNumber;
    }

    public get cpf(): string {
        return this._cpf;
    }

    private generateAccountNumber(): number {
        return Math.floor(Math.random() * 10_000);
    }

    private static validate(cpf: string, accountType: AccountType, password: number): void {
        Cpf.validate(cpf);
        if(!accountType) {
            throw new ValidateAccountTypeError();
        }
        if(!password) {
            throw new ValidateAccountPasswordError();
        }
    }
}