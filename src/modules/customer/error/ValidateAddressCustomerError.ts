import { ErrorBase } from "../../../shared/errors/ApiError";

type Error = "INVALID_ADDRESS";

export class ValidateAddressCustomerError extends ErrorBase<Error> {}