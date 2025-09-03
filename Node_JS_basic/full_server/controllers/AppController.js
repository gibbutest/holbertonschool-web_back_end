class AppController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
