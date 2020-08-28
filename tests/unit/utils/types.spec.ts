// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

import * as types from "@utils/types";

describe("isNul", () => {
  test.each([
    [null, true],
    [false, false],
    [true, false],
    [undefined, false],
    ["string", false]
  ])(".isNul(%p)", (a, expected) => {
    expect(types.isNul(a)).toBe(expected);
  });
});

describe("isUndefined", () => {
  test.each([
    [undefined, true],
    [{}, false],
    [null, false]
  ])(".isUndefined(%p)", (a, expected) => {
    expect(types.isUndefined(a)).toBe(expected);
  });
});

describe("isString", () => {
  test.each([
    ["string", true],
    [1, false],
    [true, false]
  ])(".isString(%p)", (a, expected) => {
    expect(types.isString(a)).toBe(expected);
  });
});

describe("isNumber", () => {
  test.each([
    ["1", false],
    [1, true]
  ])(".isNumber(%p)", (a, expected) => {
    expect(types.isNumber(a)).toBe(expected);
  });
});

describe("isFunction", () => {
  test.each([
    [() => {}, true],
    [{}, false]
  ])(".isFunction(%p)", (a, expected) => {
    expect(types.isFunction(a)).toBe(expected);
  });
});

describe("isObject", () => {
  test.each([
    [() => {}, true],
    [{}, true],
    [{ a: 1 }, true],
    [[], false]
  ])(".isObject(%p)", (a, expected) => {
    expect(types.isObject(a)).toBe(expected);
  });
});

describe("isEmptyObject", () => {
  test.each([
    [() => {}, true],
    [{}, true],
    [{ a: 1 }, false],
    [[], false]
  ])(".isEmptyObject(%p)", (a, expected) => {
    expect(types.isEmptyObject(a)).toBe(expected);
  });
});

describe("isArray", () => {
  test.each([
    [[], true],
    [[1, 2, 3], true],
    [{}, false]
  ])(".isArray(%p)", (a, expected) => {
    expect(types.isArray(a)).toBe(expected);
  });
});

describe("isEqual", () => {
  test.each([
    [[], [], true],
    [1, 1, true],
    [{}, {}, true],
    [{ a: 1 }, { a: "1" }, false],
    [1, 2, false],
    [1, "1", false]
  ])(".isEqual(%p, %p)", (a, b, expected) => {
    expect(types.isEqual(a, b)).toBe(expected);
  });
});
