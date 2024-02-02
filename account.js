const moment = require('moment')

class Account {
    #amount
    #account_id
    constructor(name, amount,account_id) {
        this.name = name;
        this.#amount = amount
        this.#account_id = account_id
    }

    myBalance() {
        console.log(`Your balance is ${this.#amount}`)
        return this.#amount
    }

    withdraw(amount) {
        if(this.#amount > amount){
            this.#amount -= amount
            console.log(`You withdrawed ${amount} and Your balance is ${this.#amount}`)
        } else {
            console.log(`Your balance is insufficient: ${this.#amount}`)
        }
    }

    deposit(amount) {
        this.#amount += amount
        console.log(`You deposited ${amount} and Your balance is ${this.#amount}`)
    }

    static timeInfo() {
        console.log(`the Time is ${moment().format('YYYY-MM-DD HH:mm:ss')}`)
    }
}

module.exports = Account