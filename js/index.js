class Friend {
  constructor(candiesCount, friendsArray) {
    if (this._checkValue(candiesCount, 'number')) {
      this.candiesCount = candiesCount;
    }
    if (Array.isArray(friendsArray)) {
      this.friendsArray = friendsArray;
    }
  }

  _checkValue(value, type) {
    if (typeof value !== type) {
      throw TypeError('Value should be ' + type);
    } else if (value <= 0) {
      throw RangeError('You should have Candies!');
    }
    return true;
  }

  get allFriendsCandies() {
    let result = this.candiesCount;

    this.friendsArray.forEach((friend) => {
      if (!Friend.isFriend(friend)) {
        return 0;
      }
      if (friend.friendsArray.length) {
        result += friend.allFriendsCandies;
      } else {
        return result += friend.candiesCount;
      }
    });

    return result;
  }

  static isFriend(obj) {
    return obj instanceof Friend;
  }
}


const friend9 = new Friend(9, []);
const friend8 = new Friend(8, []);
const friend7 = new Friend(7, []);
const friend6 = new Friend(6, []);
const friend5 = new Friend(5, []);
const friend4 = new Friend(4, []);
const friend3 = new Friend(3, [friend7, friend8, friend9]);
const friend2 = new Friend(2, [friend4, friend5, friend6]);
const friend1 = new Friend(1, [friend2, 2, friend3]);

console.log(friend1.allFriendsCandies);