import { v4 as uuidv4 } from "uuid";

export function getUniqueKey() {
  return uuidv4();
}

export function isNumber(value?: unknown) {
  return typeof value === "number" && !isNaN(value);
}

export function roundNumber(value?: number, decimals = 2) {
  if (!isNumber(value)) {
    return 0;
  }

  if (decimals < 0) {
    decimals = 0;
  }

  return Number(
    Math.round((value + "e" + decimals) as unknown as number) + "e-" + decimals
  );
}
