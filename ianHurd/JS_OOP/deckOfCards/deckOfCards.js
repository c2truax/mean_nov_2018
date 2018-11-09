class Card {
  constructor(value,suit){
    var stringArr = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
    var suitArr = ['Heart','Club','Diamond','Spade'];
    this.value = value;
    this.stringVal = stringArr[value-1];
    this.suit = suitArr[suit-1];
  }
  show(){
    console.log(this.stringVal,this.suit);
  }
}
class Deck{
  constructor(){
    let deckArr = [];
    for(let i = 1; i <=4; i++){
      for(let j = 1; j <= 13; j++){
        deckArr.push(new Card(j,i));
      }
    }
    console.log("BEFORE SHUFFLE",deckArr,"\n");
    this.deck = deckArr;
  }
  shuffle(){
    let t,i;
    for(let m = 51; m > 0; m--){
      i = Math.floor(Math.random() * m);
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    console.log("AFTER SHUFFLE",this.deck,"\n");
  }
  reset(){
    let deckArr = [];
    for(let i = 1; i <=4; i++){
      for(let j = 1; j <= 13; j++){
        deckArr.push(new Card(j,i));
      }
    }
    console.log("BEFORE SHUFFLE",deckArr,"\n");
    this.deck = deckArr;
  }
  deal(){
    return this.deck.pop();
  }
}
class Player{
  constructor(name,deck){
    this.hand =[];
    for(let i = 0; i < 5; i++){
      this.hand.push(deck.deal());
    }
    console.log(this.hand);
  }
  draw(deck){
    this.hand.push(deck.deal());
    console.log(this.hand)
  }
  discard(){
    this.hand.pop();
    console.log(this.hand);
  }
}
playDeck = new Deck;
playDeck.shuffle();
const david = new Player("David",playDeck);
david.draw(playDeck);
david.discard();
