import { BadRequestError } from "../../../shared/errors/BadResquestError";

export class ValidateAccountTypeError extends BadRequestError {
    constructor(){
        super('Invalid AccountType');
        this.name = 'ValidateAccountTypeError';
    }
};