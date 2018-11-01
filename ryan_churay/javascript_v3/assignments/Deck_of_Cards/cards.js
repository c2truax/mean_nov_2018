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

}
