export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') throw Error('name must be a string');
    this._name = value;
  }

  get length() {
    return this._length;
  }
  set length(value) {
    if (typeof value !== 'number') throw Error('length must be a number');
    this._length = value;
  }

  get students() {
    return this._students;
  }
  set students(value) {
    if (Array.isArray(value) && value.some((el) => typeof el !== 'string')) {
      throw Error('students must be an array of strings');
    }

    this._students = value;
  }
}
