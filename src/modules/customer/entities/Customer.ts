import { Account } from '../../account/entities/Account';
import { Cpf } from '../../person/entities/Cpf';
import { Person } from '../../person/entities/Person';
import { ValidateAddressCustomerError } from '../error/ValidateAddressCustomerError';
import { ValidateNameCustomerError } from '../error/ValidateNameCustomerError';

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
        // if(!name){
        //     throw new ValidateNameCustomerError({
        //         name: "INVALID_NAME",
        //         message: "name is empty",
        //         cause: undefined,
        //     })
        // };
        // if(!address){
        //     throw new ValidateAddressCustomerError({
        //         name: "INVALID_ADDRESS",
        //         message: "address is empty",
        //         cause: undefined,
        //     })
        // }
    }
    
    public addAccount(account: Account): void {
        this._accounts.push(account);
    }

    public get accounts(): Array<Account> { 
        return this._accounts;
    }

}