class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  _checkData(value, type) {
    if (typeof value !== type) {
      throw new RangeError(`Value must be ${type}`);
    }
  }

  set from(from) {
    this._checkData(from, 'number');
    this._from = from;
  }
  set to(to) {
    this._checkData(to, 'number');
    this._to = to;
  }

  get from() { return this._from; }
  get to() { return this._to; }

  get range() { return [this._from, this._to]; }

  validate(num) {
    if (num >= this._from && num <= this._to) {
      return num;
    } else {
      throw new RangeError('Number must be in range')
    }
  }

}


const numberRange = new RangeValidator(1, 13);
console.log(numberRange.range);
console.log(numberRange.validate(13));
console.log(numberRange.validate(14));