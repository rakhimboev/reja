const moment = require('moment')

class Account {
    #amount;
    #account_id;
    constructor(name, amount, accound_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = accound_id;
    }

    giveBalance() {
        console.log('Balance: ' + this.#amount)
        return this.#amount
    }

    withdrawMoney(amount) {
        if(this.#amount > amount) {
            this.#amount -= amount
            console.log(`${amount} was withdrawn and ${this.#amount} is left now`)
        } else {
            console.log(`The amount is insufficient, and the amount is ${this.#amount}`)
        }
    }
    makeDeposit(amount) {
        this.#amount += amount
        console.log(`Deposit made to your account and the balance is ${this.#amount}`)
    }

    giveDetails(){
        console.log(`Hi Mr.${this.name} your account number is ${this.#account_id} and the balance is ${this.#amount}`)
    }

    static classInfo() {
        console.log('This class works to build accounts.')
    }

    static timeIs () {
        console.log(`Time is ${moment().format('YYYY-MM-DD HH:mm:ss')}`)    
    }
}

module.exports = Account