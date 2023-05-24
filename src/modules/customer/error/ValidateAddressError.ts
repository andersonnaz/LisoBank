import { BadRequestError } from "../../../shared/errors/BadResquestError";

export class ValidateAddressError extends BadRequestError {
    constructor(){
        super('Invalid Address');
        this.name = 'ValidateAddressError';
    }
};