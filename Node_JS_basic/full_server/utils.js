import countStudents from '../3-read_file_async';

export default async function readDatabase(file) {
  return countStudents(file);
}
