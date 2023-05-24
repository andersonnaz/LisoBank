import { Customer} from "../entities/Customer";
import { Repository } from "../../../shared/database/Repository";
import { NotFoundError } from "../../../shared/errors/NotFoundError";


class CustomerInMemoryRepository implements Repository<Customer>{
    private _database: Customer[] = [];

    insert(customer: Customer): Customer {
        this._database.push(customer);
        return customer as Customer;
    }

    list(): Customer[] {
        return this._database;
    }

    delete(cpf: string): string {
        const customers = this._database;
        const newCustomers = customers.filter((customer) => {
           return customer.cpf.number !== cpf;
        })
        if(newCustomers.length === 0) {
            throw new NotFoundError('customer not found');
        }
        return 'Customer deleted!';
    }

    find(cpf: string): Customer {
        const customer = this._database.find((customer) => {
           return customer.cpf.number === cpf;
        })
        if(!customer) {
            throw new NotFoundError('customer not found');
        }
        return customer as Customer;
    }

    update(cpf: string, address: string): Customer {
        const customer = this.find(cpf);
        customer.address = address;
        return customer;
    }
}

export default new CustomerInMemoryRepository();