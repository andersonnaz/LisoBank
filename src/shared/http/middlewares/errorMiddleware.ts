import {Request, Response, NextFunction}from "express";
import { ApiError, BadRequest } from "../../errors/ApiError";
import { ValidateCpfError } from "../../../modules/customer/error/ValidateCpfError";

export const errorMiddleware = (error: Error & Partial<ApiError>, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof ValidateCpfError){error = new BadRequest(error.message)}
    const statusCode = error.statusCode ?? 500;
    const message = error.statusCode ? error.message : 'Internal server error';
    return response.status(statusCode).json({message});
}