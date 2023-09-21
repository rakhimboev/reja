class Shop {
    constructor(apple, banana, kiwi) {
        this.apple = apple;
        this.banana = banana;
        this.kiwi = kiwi;
    }

    sell(item, quantity) {
        if (this[item] > quantity) {
            this[item] -= quantity;
        }
        this.whatIsLeft()
    }
    
    receive(item, quantity) {
        this[item] += quantity;
        myShop.whatIsLeft()
        
    }
    whatIsLeft() {
        console.log(`Apple: ${this.apple}, Banana: ${this.banana}, Kiwi: ${this.kiwi}`)
    }

}

const myShop = new Shop(4, 5, 2);

myShop.whatIsLeft()

myShop.sell('banana', 3);

myShop.receive('kiwi', 3);