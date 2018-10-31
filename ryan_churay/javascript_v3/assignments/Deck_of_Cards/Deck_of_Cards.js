class Card {
	constructor(suit, num) {
		this._suit = suit;
		this._num = num;
		switch(num) {
			case 1:
				this._value = 'Ace';
				break;
			case 2:
				this._value = 'Two';
				break;
			case 3:
				this._value = 'Three';
				break;
			case 4:
				this._value = 'Four';
				break;
			case 5:
				this._value = 'Five';
				break;
			case 6:
				this._value = 'Six';
				break;
			case 7:
				this._value = 'Seven';
				break;
			case 8:
				this._value = 'Eight';
				break;
			case 9:
				this._value = 'Nine';
				break;
			case 10:
				this._value = 'Ten';
				break;
			case 11:
				this._value = 'Jack';
				break;
			case 12:
				this._value = 'Queen';
				break;
			case 13:
				this._value = 'King';
				break;
		}
	}
}

class Deck {

	constructor(){
		this._cards = new Array(52);
		this.makeCards();
		// let self = this
  }

	makeCards() {
  	let suit;
  		for (let i=0; i<4; i++) {
    			for (let j=1; j<14; j++) {
      			switch(i) {
        				case 0:
			            suit = 'Spades'
			            break;
			        case 1:
			            suit = 'Clubs';
			            break;
			        case 2:
			            suit = 'Hearts';
			            break;
			        case 3:
			            suit = 'Diamonds';
			            break;
		        }
    			this._cards[i*13+(j-1)] = new Card(suit=suit, j);
    		}
  	}
	}
	showCards() {
  	for (let i=0; i<this._cards.length; i++) {
    		console.log(this._cards[i])
  	}
	}

	shuffleCards() {
	  	let m = this._cards.length, t, i;

		// While there remain elements to shuffle…
		while (m) {

		    // Pick a remaining element…
		    i = Math.floor(Math.random() * m--);

		    // And swap it with the current element.
		    t = this._cards[m];
		    this._cards[m] = this._cards[i];
		    this._cards[i] = t;
		}

  	return this;
  }

	deal() {
		if (this._cards.length < 1) {
			console.log('Deck Empty');
			return;
		}
		return this._cards.pop();
	}
}

class Player {
	constructor(name, deck) {
		this._deck = deck
		this._name = name;
		this._hand = new Array(5);
		this.drawCards(deck);
	}

	drawCards(deck) {
		for(let i=0; i<this._hand.length; i++) {
			if (this._hand[i] == undefined) {
				this._hand[i] = deck.deal();
			}
		}

		return this;
	}

	showHand() {
		console.log(`\n${this._name}'s hand...`)
		for (let i=0; i<this._hand.length; i++) {
			console.log(this._hand[i]);
		}

		return this;
	}

	discardCard(num=0) {
		delete this._hand[num];
		this._hand = this._hand.filter(n => n != undefined);
		return this;
	}

	drawCard() {
		if (this._hand.length < 5) {
			this._hand.push(this._deck.deal());
		} else {
			console.log('hand size cannot exceed 5 cards. please discard a card');
		}
	}
}

myDeck = new Deck();
myDeck.shuffleCards();
Ryanopolis = new Player('Ryanopolis', myDeck);
Ryanopolis.showHand();
Ryanopolis.discardCard(3);
Ryanopolis.discardCard(1);
Ryanopolis.drawCards();
//Ryanopolis.drawCard();
Ryanopolis.showHand();
