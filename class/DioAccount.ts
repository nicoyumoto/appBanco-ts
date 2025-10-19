export abstract class DioAccount {
    private name: string
    private accountNumber: number
    protected balance: number = 0
    protected status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (amount: number): void => {
        this.balance += amount
        console.log(`Você depositou R$${amount}`)
    }

    withdraw = (amount: number): void => {
        if(this.status === true && this.balance > amount){
            this.balance -= amount
            console.log(`Você sacou R$${amount}`)
        } else{
            console.log('Saldo insuficiente')
        }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }
}