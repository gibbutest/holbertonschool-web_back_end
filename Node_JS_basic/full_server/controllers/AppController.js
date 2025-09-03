export default class AppController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static getHomepage(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
}
