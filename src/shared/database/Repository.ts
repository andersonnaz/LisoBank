export interface Repository<T> {
    insert(params: T): T;
    list(): T[];
    delete(id: string): string;
    find(id: string): T | undefined;
    update(id: string, param: string): T;
}
