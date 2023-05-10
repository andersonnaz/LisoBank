import { Repository } from "./Repository";

export class SingletonCustomerRepositoryFactory {
    private constructor(){}

    private static instance: Repository | null = null;

    static getInstance(): Repository {
        if(!this.instance){
            this.instance = new Repository();
        }
        return this.instance;
    }
}