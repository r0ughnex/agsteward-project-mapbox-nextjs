import { v4 as uuidv4 } from "uuid";

export function getUniqueKey() {
  return uuidv4();
}
