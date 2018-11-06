class Card{
    constructor(suit, value, num){
        this.suit = suit;
        this.value = value;
        this.num = num;
    }

    show() {
        console.log("Suit: " + this.suit + ", Value: " + this.value + ", Numerical Value: " + this.num);
    }
}

class Deck{
    constructor(){
        this.cards = [];
        var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        var values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for(var i = 0; i < suits.length; i++){
            for(var j = 0; j < values.length; j++){
                var card = new Card(suits[i], values[j], nums[j]);
                this.cards.push(card);
            }
        }
    }

    show() {
        console.log(this.cards);
    }

    shuffle() {
        var copy = [];
        var n = this.cards.length;
        var i;
        while(n){
            i = Math.floor(Math.random() * n--);
            copy.push(this.cards.splice(i, 1)[0]);
        }
        this.cards = copy;
        return copy;
    }

    reset(deck) {
        deck = new Deck();
    }

    deal(player) {
        console.log(this.cards);
        player.hand.push(this.cards.shift());
        console.log(this.cards);
        console.log(player.hand);
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        deck.deal(this);
        console.log(this.hand);
    }

    discard(num) {
        this.hand.splice(num, 1);
        console.log(this.hand);
    }
}


const deck = new Deck();
// deck.show();
deck.shuffle();
deck.reset(deck);
const player = new Player("Yugi Moto");
deck.deal(player);
player.draw(deck);
player.discard(1);
console.log(player.hand[0].suit);
console.log(player.hand[0].value);
console.log(player.hand[0].num);
// player.greet();