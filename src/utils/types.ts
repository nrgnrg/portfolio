/* eslint-disable @typescript-eslint/no-explicit-any */

export const isNil = (value: any) => value === null;

export const isUndefined = (value: any) => value === void 0;

export const isDefined = (value: any) => !isUndefined(value) && !isNil(value);

export const isString = (value: any) => typeof value === "string";

export const isNumber = (value: any) => typeof value === "number";

export const isEqual = (a: any, b: any) =>
  JSON.stringify(a) === JSON.stringify(b);

export const isFunction = (value: any) =>
  typeof value === "function" || value instanceof Function;

export const isObject = (value: any) => {
  const type = typeof value;
  return (
    !isNil(value) &&
    (type === "object" || type === "function") &&
    !Array.isArray(value)
  );
};

export const isEmptyObject = (value: object) =>
  isObject(value) && Object.entries(value).length === 0;

export const isArray = (value: any) => Array.isArray(value);

/* eslint-enable @typescript-eslint/no-explicit-any */
