import { ValidateCpfError } from "../../customer/error/ValidateCpfError";

const REGEX_VALIDATE_CPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

export class Cpf {
    private readonly _number: string;

    private constructor(number: string){
        this._number = number;
        Object.freeze(this);
    }

    public get number() {
        return this._number;
    }

    public static validate(number: string): string {
        if(!REGEX_VALIDATE_CPF.test(number)){
            throw new ValidateCpfError();
        }
        return number;
    }

    public static create(number: string): Cpf {
        this.validate(number);
        return new Cpf(number);
    }
}