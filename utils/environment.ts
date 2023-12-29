export enum NodeEnv {
  Development = "development",
  Production = "production",
  Test = "test",
}

export function isModeDev() {
  return process?.env?.NODE_ENV === NodeEnv.Development;
}

export function isModeProd() {
  return process?.env?.NODE_ENV === NodeEnv.Production;
}

export function isModeTest() {
  return process?.env?.NODE_ENV === NodeEnv.Test;
}
