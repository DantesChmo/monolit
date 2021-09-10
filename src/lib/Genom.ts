import { v4 as uuidV4 } from 'uuid';

class Genom {
  public static createKey(): string {
    return uuidV4();
  }
}

export {
  Genom
};
