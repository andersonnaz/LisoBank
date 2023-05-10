import { CustomerService } from "../model/services/CustomerService";
import { Request, Response } from "express";

export class CustomerController {

    list(request: Request, response: Response): Response{
        const customerService = new CustomerService();
        const result = customerService.list();
        return response.json(result);
    }

    create(request: Request, response: Response): Response {
        const {name, cpf, adress, password, initialDeposit} = request.body;
        const customerService = new CustomerService();
        const result = customerService.create(name, cpf, adress, password, initialDeposit);
        return response.status(200).json(result);
    }

    delete(request: Request, response: Response): Response {
        const {accountNumber} = request.params;
        const customerService = new CustomerService();
        const result = customerService.delete(parseInt(accountNumber));
        return response.status(200).json(result);
    }

    findByAccountNumber(request: Request, response: Response): Response {
        const {accountNumber} = request.params;
        const customerService = new CustomerService();
        const result = customerService.findByAccountNumber(parseInt(accountNumber));
        return response.status(200).json(result);
    }

    update(request: Request, response: Response): Response {
        const {accountNumber} = request.params;
        const {adress, password} = request.body;
        const customerService = new CustomerService();
        const result = customerService.update(parseInt(accountNumber), {adress, password});
        return response.status(200).json(result);
    }
}