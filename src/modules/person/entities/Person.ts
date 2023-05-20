import { Cpf } from "./Cpf";

export abstract class Person {
    constructor(
        protected readonly _name: string,
        protected readonly _cpf: Cpf,
        protected _address: string,
    ){}
    
    public get name(): string {
        return this._name;
    }

    public get cpf(): Cpf {
        return this._cpf;
    }

    public get address(): string {
        return this._address;
    }

    public set address(newAddress: string) {
        this._address = newAddress;
    }
    
}