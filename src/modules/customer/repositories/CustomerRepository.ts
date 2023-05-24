import { Customer } from "../entities/Customer";

export class CustomerRepository {
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

    delete(cpf: string): string {
        const customers = this.list();
        const index = customers.findIndex((customer) => {
           return customer.cpf.number === cpf;
        })
        customers.splice(index, 1);
        this._database = customers;
        return 'Customer deleted!';
    }

    updateAddress(cpf: string, address: string): Customer {
        const customer = this.findCustomerByCpf(cpf);
        customer.address = address;
        return customer;
    }

    findCustomerByCpf(cpf: string): Customer {
        const customers = this.list();
        const customer = customers.find((customer) => {
           return customer.cpf.number === cpf;
        })
        return customer as Customer;
    }

    deleteAccount(accountNumber: number): void {
        const customers = this.list();
        const customerIndex = customers.findIndex((customer) => {
            return customer.accounts.find((account) => {
                return account.accountNumber === accountNumber;
            });
        });

        const accountIndex = customers[customerIndex].accounts.findIndex((account) => {
            return account.accountNumber === accountNumber;
        });

        customers[customerIndex].accounts.splice(accountIndex, 1);
        
    }

    findCustomerByAccountNumber(accountNumber: number): Customer {
        const customers = this.list();
        const customer = customers.find((customer) => {
            return customer.accounts.find((account) => {
                return account.accountNumber === accountNumber;
            });
        });
        if(!customer) {
            throw new Error('Customer not found');
        }
        return customer;
    }
}