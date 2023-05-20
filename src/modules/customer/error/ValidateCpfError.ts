export class ValidateCpfError extends Error {
    constructor(){
        super('Invalid Cpf');
        this.name = 'ValidateCpfError';
    }
};