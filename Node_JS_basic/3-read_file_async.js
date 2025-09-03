const fs = require('fs/promises');

async function countStudents(path) {
  let data;

  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const fieldMap = new Map();

  const csv = data
    .toString('utf-8')
    .split('\n')
    .filter((line) => line.trim() !== '')
    .slice(1);

  console.log(`Number of students: ${csv.length}`);

  csv.forEach((line) => {
    const [first, , , field] = line.split(',');

    if (fieldMap.has(field)) fieldMap.get(field).push(first);
    else fieldMap.set(field, [first]);
  });

  for (const [field, students] of fieldMap.entries()) {
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }
}

module.exports = countStudents;
