import { Response, Request } from "express";

export abstract class AbstractController {
    async handle(request: Request, response: Response, param: CallableFunction){
        try {
            const result = await param(request, response);
            return response.json(result);
        } catch (error) {
            return response.json(error);
        }
    };
}