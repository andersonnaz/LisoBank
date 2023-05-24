import { BadRequestError } from "../../../shared/errors/BadResquestError";

export class ValidateCpfError extends BadRequestError {
    constructor(){
        super('Invalid Cpf');
        this.name = 'ValidateCpfError';
    }
};