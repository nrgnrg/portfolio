/* eslint-disable @typescript-eslint/no-explicit-any */

export const isNul = (value: any): value is null => value === null;

export const isUndefined = (value: any): value is undefined => value === void 0;

export const isDefined = (value: any) => !isUndefined(value) && !isNul(value);

export const isString = (value: any): value is string =>
  typeof value === "string";

export const isNumber = (value: any): value is number =>
  typeof value === "number";

export const isFunction = (value: any): value is Function =>
  typeof value === "function" || value instanceof Function;

export const isObject = (value: any): value is object => {
  const type = typeof value;
  return (
    !isNul(value) &&
    (type === "object" || type === "function") &&
    !Array.isArray(value)
  );
};

export const isEmptyObject = (value: object): value is {} =>
  isObject(value) && Object.entries(value).length === 0;

export const isArray = (value: any): value is [] => Array.isArray(value);

export const isEqual = (a: any, b: any) =>
  JSON.stringify(a) === JSON.stringify(b);

/* eslint-enable @typescript-eslint/no-explicit-any */
