# Sistema de Contas Bancárias (POO com TypeScript)

**Sistema bancário orientado a objetos** utilizando **TypeScript**, aplicando conceitos como **herança, encapsulamento e polimorfismo**.

---

### 🎯 **Objetivos principais**

1. **Implementar métodos básicos de conta bancária:**
    - `deposit(amount)`: adiciona valor ao saldo.
    - `withdraw(amount)`: permite saque apenas se o saldo for suficiente e a conta estiver ativa.
2. **Criar uma conta empresarial (`CompanyAccount`):**
    - Possui o método `getLoan(amount)` para realizar empréstimos se a conta estiver ativa.
3. **Criar uma conta especial (`PremiumAccount`):**
    - Não possui novos atributos, mas o depósito ganha **+10 de bônus** em cada operação.
4. **Garantir encapsulamento total:**
    - Todos os atributos devem ser **privados**.
    - `name` e `accountNumber` **não podem ser alterados** depois da criação.
    - Acesso a `balance` e `status` deve ser feito via **getters e setters**.
5. **Testar as classes no `app.ts`:**
    - Criar instâncias de cada tipo de conta e executar seus métodos.

---

### 💡 **Conceitos praticados**

- Classes e herança
- Modificadores de acesso (`private`, `protected`, `public`)
- Métodos personalizados
- Uso de **getters** e **setters**
- Reutilização e extensão de código
