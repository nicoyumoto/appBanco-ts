import { DioAccount } from "./DioAccount.ts"

export class PremiumAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (amount: number): void => {
        this.balance += amount + 10
        console.log(`Você depositou R$${amount} com acréscimo de R$10`)
    }
}