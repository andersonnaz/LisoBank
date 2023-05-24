import { Account } from '../../account/entities/Account';
import { Cpf } from '../../person/entities/Cpf';
import { Person } from '../../person/entities/Person';
import { ValidateAddressError } from '../error/ValidateAddressError';
import { ValidateNameError } from '../error/ValidateNameError';

export class Customer extends Person {
    private _accounts: Array<Account>;
    
    private constructor(name: string, cpf: Cpf, adress: string){
        super(name, cpf, adress);
        this._accounts = new Array<Account>;
    }

    public static create(name: string, cpf: Cpf, address: string): Customer {
        this.validate(name, address);
        return new Customer(name, cpf, address);
    }

    private static validate(name: string, address: string) {
        if(!name){
            throw new ValidateNameError();
        };
        if(!address){
            throw new ValidateAddressError();
        }
    }
    
    public addAccount(account: Account): void {
        this._accounts.push(account);
    }

    public get accounts(): Array<Account> { 
        return this._accounts;
    }

}