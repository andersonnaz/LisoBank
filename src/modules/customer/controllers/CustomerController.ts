import CustomerInMemoryRepository from "../repositories/CustomerInMemoryRepository";
import { CustomerService } from "../services/CustomerService";
import { Request, Response } from "express";

export class CustomerController {
    private readonly _customerService: CustomerService;

    constructor(){
        this._customerService = new CustomerService(CustomerInMemoryRepository);
    }

    list(request: Request, response: Response): Response{
        const result = this._customerService.list();
        return response.json(result);
    }

    create(request: Request, response: Response): Response {
        const {name, cpf, adress} = request.body;
        const result = this._customerService.create(name, cpf, adress);
        return response.status(200).json(result);
    }

    delete(request: Request, response: Response): Response {
        const {cpf} = request.params;
        const result = this._customerService.delete(cpf);
        return response.status(200).json(result);
    }

    findByCpf(request: Request, response: Response): Response {
        const {cpf} = request.params;
        const result = this._customerService.findByCpf(cpf);
        return response.status(200).json(result);
    }

    updateAddres(request: Request, response: Response): Response {
        const {cpf} = request.params;
        const {adress} = request.body;
        const result = this._customerService.updateAddress(cpf, adress);
        return response.status(200).json(result);
    }
}