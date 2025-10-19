import { CompanyAccount } from "./class/CompanyAccount.ts"
import { PeopleAccount } from "./class/PeopleAccount.ts"
import { PremiumAccount } from "./class/PremiumAccount.ts"

const peopleAccount: PeopleAccount = new PeopleAccount(2 ,'Pedro', 1)
peopleAccount.deposit(20)
peopleAccount.withdraw(15)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('Nicole', 1)
companyAccount.deposit(500)
companyAccount.withdraw(550)
companyAccount.getLoan(100)
console.log(companyAccount)

const premiumaAccount: PremiumAccount = new PremiumAccount('Lilian', 3)
premiumaAccount.deposit(20)
premiumaAccount.withdraw(25)
console.log(premiumaAccount)
