import { Account } from './Account';

export class Customer {
    private _name: string;
    private _cpf: string;
    private _adress: string;
    private _account: Account;

    constructor(name: string, cpf: string, adress: string, password: number, initialDeposit: number) {
        this._name = name;
        this._cpf = cpf;
        this._adress = adress;
        this._account = new Account(password, initialDeposit);
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string){
        this._name = newName;
    }

    get cpf(): string {
        return this._cpf;
    }

    get adress(): string {
        return this._adress;
    }

    set adress(newAdress: string) {
        this._adress = newAdress;
    }

    get account(): Account {
        return this._account;
    }
}