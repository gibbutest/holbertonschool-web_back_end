export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an array');

    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') throw TypeError('Name must be a string');
    this._name = value;
  }

  get length() {
    return this._length;
  }
  set length(value) {
    if (typeof value !== 'number') throw TypeError('Length must be a number');
    this._length = value;
  }

  get students() {
    return this._students;
  }
  set students(value) {
    if ((Array.isArray(value) && value.some((el) => typeof el !== 'string')) || !Array.isArray(value)) {
      throw TypeError('students must be an array of strings');
    }

    this._students = value;
  }
}
