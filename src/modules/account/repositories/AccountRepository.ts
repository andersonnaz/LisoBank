import { Repository } from "../../../shared/database/Repository";
import { Account } from "../entities/Account";

export interface AccountRepository extends Repository<Account>{
    withdrawal(id: string, param: number): void;
    deposit(id: string, param: number): void;
}