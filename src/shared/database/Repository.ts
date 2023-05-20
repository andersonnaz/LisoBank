export interface Repository<T> {
    insert<P extends T>(params: T): T;
    list(): T[];
    delete(id: string): string;
    find(id: string): T | undefined;
    update(id: string, param: string): T;
}

export interface TransactionRepository {
    withdrawal(id: string, param: number): void;
    deposit(id: string, param: number): void;
    transfer(id: string, param: number, id_2: string): void;
}
