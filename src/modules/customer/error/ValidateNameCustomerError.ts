import { ErrorBase } from "../../../shared/errors/ApiError";

type Error = "INVALID_NAME";

export class ValidateNameCustomerError extends ErrorBase<Error> {}