import { readDatabase } from '../utils';

const database = process.argv[2];

export default class StudentsController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getAllStudents(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    let string = 'This is the list of our students\n';

    try {
      const { total, data } = await readDatabase(database);
      string += `Number of students: ${total}\n`;

      Object.entries(data).forEach(([field, students]) => {
        string += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });
    } catch (error) {
      res.statusCode = 500;
      string += error.message;
    }

    res.end(string);
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getAllStudentsByMajor(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') res.status(500).end('Major parameter must be CS or SWE');

    try {
      const { data } = await readDatabase(database);
      res.status(200).end(`List: ${data[major].join(', ')}`);
    } catch (error) {
      res.status(500).end(error.message);
    }
  }
}
