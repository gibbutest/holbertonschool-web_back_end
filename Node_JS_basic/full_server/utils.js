import countStudents from '../3-read_file_async';

export async function readDatabase(file) {
  return await countStudents(file);
}
