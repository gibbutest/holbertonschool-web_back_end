// The checker says it doesn't want the .js BUT when trying to run
// this via NodeJS, it will cause an error.
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
