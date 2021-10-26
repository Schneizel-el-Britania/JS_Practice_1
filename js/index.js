class Validator {
  _validateValue(value, type) {
    if (typeof value !== type) {
      throw new TypeError('Value should be ' + type);
    }
    return true;
  }

  _validateName(value) {
    if (value.length < NAME_LENGTH) {
      throw new RangeError('Name should be more than ' + NAME_LENGTH);
    }
    if (/\d/.test(value)) {
      throw new SyntaxError('Name should not contain numbers')
    }
    return true;
  }

  _validateYear(value) {
    const currentYear = new Date().getFullYear();
    if (value > currentYear || value < currentYear - STUDY_DURATION) {
      throw new RangeError('You should enter correct year!')
    }
    return true;
  }

  _validateStudents(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students should be an Array!')
    }
    if (!value.every((item) => Student.isStudent(item))) {
      throw new TypeError('Array items should be Students!')
    }
    return true;
  }
}
class User extends Validator {
  constructor(name, surname) {
    super();
    this.name = name;
    this.surname = surname;
  }


  get name() { return this._name; }
  get surname() { return this._surname; }

  set name(name) {
    if (this._validateValue(name, 'string') && this._validateName(name)) {
      this._name = name;
    }
  }

  set surname(surname) {
    if (this._validateValue(surname, 'string') && this._validateName(surname)) {
      this._surname = surname;
    }
  }

  getFullName() { }
  setFullName() { }

}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  get year() { return this._year; }

  set year(year) {
    if (this._validateValue(year, 'number') && this._validateYear(year)) {
      this._year = year;
    }
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  setFullName(name, surname) {
    if (this._validateValue(name, 'string')
      && this._validateValue(surname, 'string')
      && this._validateName(name)
      && this._validateName(surname)) {
      this._name = name;
      this._surname = surname;
    }
  }

  getCourse() {
    return new Date().getFullYear() - this.year + 1;
  }

  static isStudent(obj) {
    return obj instanceof Student;
  }

}

class Group extends Validator {
  constructor(name, students) {
    super();
    this.name = name;
    if (this._validateStudents(students)) {
      this.students = students;
    }
  }

  get name() { return this._name }
  set name(name) {
    if (this._validateValue(name, 'string')) {
      this._name = name;
    }
  }

  showStudents() {
    this.students.forEach((student) => {
      const { name, surname } = student;
      console.log(`${surname} ${name[0]}.`);
    })
  }

}




const student1 = new Student('Vasya', 'Putrenko', 2016);
const student2 = new Student('Tod', 'Howard', 2016);
const student3 = new Student('Elon', 'Musk', 2016);
const student4 = new Student('Vladimir', 'Venegretov', 2016);

console.log('Student\'s full name:', student1.getFullName());
console.log('Student\'s course:', student1.getCourse());

const group = new Group('FFT-552', [student1, student2, student3, student4]);
group.showStudents();
