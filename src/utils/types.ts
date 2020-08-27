export const isNul = (value: unknown): value is null => value === null;

export const isUndefined = (value: unknown): value is undefined =>
  value === void 0;

export const isDefined = (value: unknown) =>
  !isUndefined(value) && !isNul(value);

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isNumber = (value: unknown): value is number =>
  typeof value === "number";

export const isFunction = (value: unknown): value is Function =>
  typeof value === "function" || value instanceof Function;

export const isObject = (value: unknown): value is object => {
  const type = typeof value;
  return (
    !isNul(value) &&
    (type === "object" || type === "function") &&
    !Array.isArray(value)
  );
};

export const isEmptyObject = (value: object): value is {} =>
  isObject(value) && Object.entries(value).length === 0;

export const isArray = (value: unknown): value is [] => Array.isArray(value);

export const isEqual = (a: unknown, b: unknown) =>
  JSON.stringify(a) === JSON.stringify(b);
