class Figure3D {
  constructor(name) {
    this.name = name;
  }

  _checkValue(value, type) {
    if (typeof value !== type) {
      throw TypeError('Value should be ' + type);
    } else if (value <= 0) {
      throw RangeError('Value should be more than 0');
    }

    return true;
  }

  get figureVolume() { }
}


class Sphere extends Figure3D {
  constructor(r) {
    super('Sphere');

    if (this._checkValue(r, 'number')) {
      this.r = r;
    }
  }

  get figureVolume() {
    return (4 * Math.PI * this.r ** 3) / 3;
  }
}

class Cube extends Figure3D {
  constructor(a) {
    super('Cube');

    if (this._checkValue(a, 'number')) {
      this.a = a;
    }
  }

  get figureVolume() {
    return this.a ** 3;
  }
}

class Cylinder extends Figure3D {
  constructor(r, h) {
    super('Cylinder');

    if (this._checkValue(r, 'number')) {
      this.r = r;
    }
    if (this._checkValue(h, 'number')) {
      this.h = h;
    }
  }

  get figureVolume() {
    return Math.PI * this.r ** 2 * this.h;
  }
}

const getFigureVolume = function (figureName, figureType, ...values) {
  figureName = new figureType(...values);
  console.log(figureName.name, figureName.figureVolume);
}

getFigureVolume('sphere', Sphere, 10);
getFigureVolume('cube', Cube, 15);
getFigureVolume('cylinder', Cylinder, 5, 50);
