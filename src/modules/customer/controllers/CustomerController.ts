import { AbstractController } from "../../../shared/AbstractController";
import CustomerInMemoryRepository from "../repositories/CustomerInMemoryRepository";
import { CustomerService } from "../services/CustomerService";
import { Request, Response } from "express";

export class CustomerController extends AbstractController {
  private readonly _customerService: CustomerService;

  constructor() {
    super();
    this._customerService = new CustomerService(CustomerInMemoryRepository);
  }
//template method (pattern)
  list = async (request: Request, response: Response): Promise<Response> => {
    return this.handle(request, response, async () => {
      return this._customerService.list();
    })
  };

  create = async (request: Request, response: Response): Promise<Response> => {
    return this.handle(request, response, async () => {
        const { name, cpf, adress } = request.body;
        return this._customerService.create(name, cpf, adress);
    });
  };

  delete = async (request: Request, response: Response): Promise<Response> => {
    return this.handle(request, response, async () => {
      const { cpf } = request.params;
      return this._customerService.delete(cpf);
    })
  };

  findByCpf = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    return this.handle(request, response, async () => {
      const { cpf } = request.params;
      return this._customerService.findByCpf(cpf);
      
    })
  };

  updateAddres = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    return this.handle(request, response, async () => {
      const { cpf } = request.params;
      const { adress } = request.body;
      return this._customerService.updateAddress(cpf, adress);

    })
  };
}
