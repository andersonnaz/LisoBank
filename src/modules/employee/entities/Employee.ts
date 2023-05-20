import { Account, AccountType } from "../../account/entities/Account";
import { Cpf } from "../../person/entities/Cpf";
import { Customer } from "../../customer/entities/Customer";
import { Person } from "../../person/entities/Person";

export class Employee extends Person {
    private readonly _registration: number;

    protected constructor(name: string, cpf: Cpf, address: string){
        super(name, cpf, address);
        this._registration = this.generateRegistrationNumber();
    }

    private generateRegistrationNumber(): number {
        return Math.floor(Math.random() * 100_000); 
    }

    protected create(name: string, cpf: Cpf, address: string): Employee {
        return new Employee(name, cpf, address);
    }

}