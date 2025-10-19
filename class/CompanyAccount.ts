import { DioAccount } from "./DioAccount.ts"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (amount: number): void => {
        if(this.status === true){
            this.balance += amount
            console.log(`Você pregou um empréstimo de R$${amount}`)
        } else {
            console.log('Você não pode fazer empréstimos')
        }
    }
}