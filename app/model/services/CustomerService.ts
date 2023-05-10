import { Customer } from "../entities/Customer";
import { SingletonCustomerRepositoryFactory } from "../repositories/SingletonCustomerRepositoryFactory";

export class CustomerService {
    create(name: string, cpf: string, adress: string, password: number, initialDeposit: number): Customer {
        const customer = new Customer(name, cpf, adress, password, initialDeposit);
        const repository = SingletonCustomerRepositoryFactory.getInstance();
        const result = repository.insert(customer);
        return result;
    }

    list(): Customer[] {
        const repository = SingletonCustomerRepositoryFactory.getInstance();
        return repository.list();
    }

    delete(accountNumber: number): string {
        const repository = SingletonCustomerRepositoryFactory.getInstance();
        const result = repository.delete(accountNumber);
        return result;
    }

    findByAccountNumber(accountNumber: number): Customer {
        const repository = SingletonCustomerRepositoryFactory.getInstance();
        const result = repository.findByAccountNumber(accountNumber);
        return result;
    }

    update(accountNumber: number, customerChange: any): Customer {
        const repository = SingletonCustomerRepositoryFactory.getInstance();
        const result = repository.update(accountNumber, customerChange);
        return result;
    }
}