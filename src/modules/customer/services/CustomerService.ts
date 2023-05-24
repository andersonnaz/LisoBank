import { Customer } from "../entities/Customer";
import { Cpf } from "../../person/entities/Cpf";
import { Repository } from "../../../shared/database/Repository";

export class CustomerService {
    private readonly _repository: Repository<Customer>;

    constructor(repository: Repository<Customer>){
        this._repository = repository;
    };

    async create(name: string, cpf: string, adress: string): Promise<Customer>{
        const cpfCustomer = Cpf.create(cpf);
        const customer = Customer.create(name, cpfCustomer, adress);
        const result = await this._repository.insert(customer);
        return result;
    }

    async list(): Promise<Customer[]> {
        return await this._repository.list();
    }

    async delete(cpf: string): Promise<string> {
        return await this._repository.delete(cpf);
    }

    async findByCpf(cpf: string): Promise<Customer | undefined>{
        const result = await this._repository.find(cpf);
        return result;
    }

    async updateAddress(cpf: string, newAddress: string): Promise<Customer> {
        const result = await this._repository.update(cpf, newAddress);
        return result;
    }
}