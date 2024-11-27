// import { v4 as uuid, validate } from 'uuid';
// export default class Id {
//   static novo(): string {
//     return uuid();
//   }

//   static valido(id: string): boolean {
//     return validate(id);
//   }
// }

// console.log(Id.novo());

import uuidv4 from 'react-native-uuid';
import { validate } from 'uuid';

export default class Id {
  static novo(): string {
    return uuidv4.v4(); // Agora usando a versão correta do método
  }

  static valido(id: string): boolean {
    return validate(id);
  }
}

console.log(Id.novo());
