import uuidv4 from 'react-native-uuid';
import { validate } from 'uuid';

export default class Id {
  static novo(): string {
    return uuidv4.v4();
  }

  static valido(id: string): boolean {
    return validate(id);
  }
}

console.log(Id.novo());
