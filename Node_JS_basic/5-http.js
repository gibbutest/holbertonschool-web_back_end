const http = require('http');
const countStudents = require('./3-read_file_async.js');

const database = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      let string = 'This is a list of our students\n';
      const { total, data } = await countStudents(database);

      string += `Number of students: ${total}\n`;

      Object.entries(data).forEach(([field, students]) => {
        string += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(string);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
