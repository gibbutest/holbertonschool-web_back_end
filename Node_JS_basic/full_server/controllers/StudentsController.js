import { readDatabase } from '../utils';

export default class StudentsController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getAllStudents(req, res) {
    const database = process.argv[2];
    res.setHeader('Content-Type', 'text/plain');
    try {
      const { total, data } = await readDatabase(database);
      let string = 'This is the list of our students\n';
      string += `Number of students: ${total}\n`;

      Object.entries(data).forEach(([field, students]) => {
        string += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.status(200).send(string);
    } catch (error) {
      res.status(200).send(error.message);
    }
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getAllStudentsByMajor(req, res) {
    const database = process.argv[2];
    res.setHeader('Content-Type', 'text/plain');
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') res.status(200).end('Major parameter must be CS or SWE');

    try {
      const { data } = await readDatabase(database);
      res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (error) {
      res.status(200).send(error.message);
    }
  }
}
