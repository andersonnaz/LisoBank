import { Cpf } from "../../person/entities/Cpf";
import { Employee } from "./Employee";

export class Manager extends Employee {
    constructor(name: string, cpf: Cpf, adress: string) {
        super(name, cpf, adress);
    } 
    
}