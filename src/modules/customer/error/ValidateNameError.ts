import { BadRequestError } from "../../../shared/errors/BadResquestError";

export class ValidateNameError extends BadRequestError {
    constructor(){
        super('Invalid Name');
        this.name = 'ValidateNameError';
    }
};