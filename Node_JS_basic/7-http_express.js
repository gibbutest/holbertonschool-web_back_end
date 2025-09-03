const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  let string = 'This is the list of our students\n';

  try {
    const { total, data } = await countStudents(database);

    string += `Number of students: ${total}\n`;

    Object.entries(data).forEach(([field, students]) => {
      string += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    });
    res.statusCode = 200;
  } catch (error) {
    res.statusCode = 500;
    string += error.message;
  }

  res.send(string);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
