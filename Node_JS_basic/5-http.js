const http = require('http');
const countStudents = require('./3-read_file_async.js');

const database = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const { total, data } = await countStudents(database);

      string += `Number of students: ${total}\n`;

      Object.entries(data).forEach(([field, students]) => {
        string += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.statusCode = 200;
      res.end(string);
    } catch (error) {
      res.statusCode = 500;
      res.end('Cannot load the database');
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
