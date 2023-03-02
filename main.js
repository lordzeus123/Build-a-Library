class Media {
  constructor(head, title, size) {
    this._head = head;
    this._title = title;
    this._size = size;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get getHead() {
    return this._head;
  }

  get getTitle() {
    return this._title;
  }

  get getSize() {
    return this._size;
  }

  get getIsCheckedOut() {
    return this._isCheckedOut;
  }

  get getRatings() {
    return this._ratings;
  }

  getAverageRating() {
    let avaregeRating = 0;
    if (this._ratings !== "undefined") {
      for (let i = 0; i < this._ratings.length; i++) {
        avaregeRating += this._ratings[i];
      }
      return avaregeRating / this._ratings.length;
    } else {
      return "There is no rating";
    }
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = true;
  }

  addRating(ratings) {
    this._ratings = ratings;
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(author, title, pages);
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(director, title, runTime);
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(artist, title, null);
    this._songs = songs;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything"
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.getIsCheckedOut);
historyOfEverything.addRating([4, 5, 5]);
console.log(historyOfEverything._ratings);
console.log(historyOfEverything.getAverageRating());


const speed = new Movie(
  "Jan de Bont",
  "Speed",
  116
)

speed.toggleCheckOutStatus();
console.log(speed.getIsCheckedOut);
speed.addRating([1,1,5]);
console.log(speed.getAverageRating());
