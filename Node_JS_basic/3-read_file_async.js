const fs = require('fs/promises');

async function countStudents(path) {
  let data;

  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  /**
   * @type {Record<string, string[]>}
   */
  const fieldsObj = {};

  const csv = data
    .toString('utf-8')
    .split('\n')
    .filter((line) => line.trim() !== '')
    .slice(1);

  csv.forEach((line) => {
    const [first, , , field] = line.split(',');

    if (fieldsObj[field]) fieldsObj[field].push(first);
    else fieldsObj[field] = [first];
  });

  // This is required for task 3, but just clutters the logs in task 5.
  //
  // console.log(`Number of students: ${csv.length}`);
  // Object.entries(data).forEach(([field, students]) => {
  //   console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);\
  // })

  return {
    total: csv.length,
    data: fieldsObj,
  };
}

module.exports = countStudents;
