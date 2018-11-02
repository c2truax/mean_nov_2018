class Card {
    constructor(suit, name, value){
        this.suit = suit;
        this.name = name;
        this.value = value;
    }
    show(){
        console.log(this);
    }
}

class Deck {
    constructor(){
        this.cards = [];
        var suit = ["Spades", "Hearts", "Clubs", "Diamonds"]
        var value = [["ace", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5], ["six", 6], ["seven", 7], ["eight", 8], ["nine", 9], ["ten", 10], ["jack", 11], ["queen", 12], ["king", 13]]
        for( var i in suit){
            for( var j in value){
                var c = new Card(suit[i], value[j][0], value[j][1]);
                this.cards.push(c)
            }
        }
    }
}
class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }
}
deck1 = new Deck;
deck1.cards[0].show()