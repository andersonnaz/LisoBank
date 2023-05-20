import { AccountRepository } from "../../modules/account/repositories/AccountRepository";

export class SingletonAccountRepositoryFactory {
    private constructor(){}

    private static instance: AccountRepository | null = null;

    static getInstance(): AccountRepository {
        if(!this.instance){
            this.instance = new AccountRepository();
        }
        return this.instance;
    }
}