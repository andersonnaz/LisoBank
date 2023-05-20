import { Customer } from "../entities/Customer";
import { Cpf } from "../../person/entities/Cpf";
import { Repository } from "../../../shared/database/Repository";

export class CustomerService {
    private readonly _repository: Repository<Customer>;

    constructor(repository: Repository<Customer>){
        this._repository = repository;
    };

    create(name: string, cpf: string, adress: string): Customer{
        const cpfCustomer = Cpf.create(cpf);
        const customer = Customer.create(name, cpfCustomer, adress);
        const result = this._repository.insert(customer);
        return result;
    }

    list(): Customer[] {
        return this._repository.list();
    }

    delete(cpf: string): string {
        return this._repository.delete(cpf);
    }

    findByCpf(cpf: string): Customer | undefined{
        const result = this._repository.find(cpf);
        return result;
    }

    updateAddress(cpf: string, newAddress: string): Customer {
        const result = this._repository.update(cpf, newAddress);
        return result;
    }
}