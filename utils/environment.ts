export function isModeTest() {
  return process?.env?.NODE_ENV === "test";
}

export function isModeDev() {
  return process?.env?.NODE_ENV === "development";
}

export function isModeProd() {
  return process?.env?.NODE_ENV === "production";
}
