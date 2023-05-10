import { Transaction } from "../entities/Transaction";
import { SingletonCustomerRepositoryFactory } from "../repositories/SingletonCustomerRepositoryFactory"

export class TransactionService {
    withdrawal(accountNumber: number, money: number): number {
        const repository = SingletonCustomerRepositoryFactory.getInstance();
        const customer = repository.findByAccountNumber(accountNumber);
        const transaction = new Transaction();
        const result = transaction.withdrawal(customer, money);
        return result;
    }

    deposit(accountNumber: number, money: number): string {
        const repository = SingletonCustomerRepositoryFactory.getInstance();
        const customer = repository.findByAccountNumber(accountNumber);
        const transaction = new Transaction();
        transaction.deposit(customer, money);
        return 'deposit successful!'
    }

    transfer(accountNumberSend: number, money: number, accountNumberReceived: number): string {
        const repository = SingletonCustomerRepositoryFactory.getInstance();
        const customerSend = repository.findByAccountNumber(accountNumberSend);
        const customerReceived = repository.findByAccountNumber(accountNumberReceived);
        const transaction = new Transaction();
        transaction.transfer(customerSend, money, customerReceived);
        return 'transfer successful!'
    }
}