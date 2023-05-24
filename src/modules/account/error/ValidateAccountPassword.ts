import { BadRequestError } from "../../../shared/errors/BadResquestError";

export class ValidateAccountPasswordError extends BadRequestError {
    constructor(){
        super('Invalid AccountPassword');
        this.name = 'ValidateAccountPasswordError';
    }
};