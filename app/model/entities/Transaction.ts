import { Customer } from "./Customer";

export class Transaction {
    
    withdrawal(customer: Customer, money: number): number {
        return customer.account.balance -= money;
    }
    
    deposit(customer: Customer, money: number): void {
        customer.account.balance = customer.account.balance + money;
    }
    
    transfer(customerSend: Customer, money: number, customerReceived: Customer): void {
        this.withdrawal(customerSend, money);
        this.deposit(customerReceived, money);
    }
}