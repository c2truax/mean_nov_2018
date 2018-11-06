class Card {
  constructor(value,suit){
    var stringArr = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
    var suitArr = ['Heart','Club','Diamond','Spade'];
    //value = index
    this.value = value;
    //value "j" is the index so 1 is subtracted
    this.stringVal = stringArr[value-1];
    //value "i" is the suit
    this.suit = suitArr[suit-1];
  }
  show(){
    //displays the Suit and the card value
    console.log(this.stringVal,this.suit);
  }
}
class Deck{
  constructor(){
    //empty array to store the deck
    let deckArr = [];
    //nested for loop for the suits (Hearts, Spades etc)
    for(let i = 1; i <=4; i++){
      //for loop for card value (A-K)
      for(let j = 1; j <= 13; j++){
        //push the combinations into the empty deck by "new Card"(instance of Card) which is connected via deckArr (Encapsulation)
        deckArr.push(new Card(j,i));
      }
    }
    console.log("BEFORE SHUFFLE",deckArr,"\n");
    //storing the values into the empty array
    this.deck = deckArr;
  }
  shuffle(){
    // declare t and i are random variables
    let t,i;
    //used for loops to shuffle the cards
    // 51 is the index [m--] is subtracting 1 card after every swap
    for(let m = 51; m > 0; m--){
      i = Math.floor(Math.random() * m);
      //storing as temp
      t = this.deck[m];
      //switching with a random index generated via i
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    console.log("AFTER SHUFFLE",this.deck,"\n");
  }
  reset(){
    //recreates empty deck
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
    //removes 1 card from the index
    return this.deck.pop();
  }
}
class Player{
  //pass name and decks
  constructor(name,deck){
    //empty hand
    this.hand =[];
    //deal 5 hands
    for(let i = 0; i < 5; i++){
      //this.hand attribute receives a card
      //push = method
      //deck can access the deal method
      this.hand.push(deck.deal());
    }
    console.log(this.hand);
  }
  draw(deck){
    //player receives the card that was dealt out
    //deck.deal = removes card; pushing adds to hand
    this.hand.push(deck.deal());
    console.log(this.hand)
  }
  discard(){
    //removing from the hand
    this.hand.pop();
    console.log(this.hand);
  }
}
playDeck = new Deck;
playDeck.shuffle();
const david = new Player("David",playDeck);
david.draw(playDeck);
david.discard();
