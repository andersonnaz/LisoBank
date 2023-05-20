import { CustomerRepository } from "../../modules/customer/repositories/CustomerRepository";

export class SingletonCustomerRepositoryFactory {
    private constructor(){}

    private static instance: CustomerRepository | null = null;

    static getInstance(): CustomerRepository {
        if(!this.instance){
            this.instance = new CustomerRepository();
        }
        return this.instance;
    }
}