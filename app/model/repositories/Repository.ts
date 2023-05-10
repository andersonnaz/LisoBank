import { Customer } from "../entities/Customer";

export class Repository {
    private _database: Array<Customer>;

    constructor(){
        this._database = new Array<Customer>;
    }

    insert(customer: Customer): Customer {
        this._database.push(customer);
        return customer;
    }

    list(): Customer[] {
        return this._database;
    }

    delete(accountNumber: number): string {
        const customers = this.list();
        const index = customers.findIndex((customer) => {
           return customer.account.accountNumber === accountNumber
        })
        customers.splice(index, 1);
        this._database = customers;
        return 'Customer deleted!';
    }

    update(accountNumber: number, customerChange: any): Customer {
        const customer = this.findByAccountNumber(accountNumber);
        customer.adress = customerChange.adress;
        customer.account.password = customerChange.password;
        return customer;
    }

    findByAccountNumber(accountNumber: number): Customer {
        const customers = this.list();
        const customer = customers.find((customer) => {
           return customer.account.accountNumber === accountNumber
        })
        return customer as Customer;
    }
}