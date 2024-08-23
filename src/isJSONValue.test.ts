import { expect, test } from "vitest";
import { isJSONValue } from "./isJSONValue";

interface Test {
  actual: unknown;
  expected: boolean;
}

const tests: Test[] = [
  { actual: true, expected: true },
  { actual: false, expected: true },
  { actual: +0, expected: true },
  { actual: -0, expected: true },
  { actual: Number.EPSILON, expected: true },
  { actual: null, expected: true },
  { actual: "foo", expected: true },
  { actual: [], expected: true },
  { actual: {}, expected: true },
  { actual: Number.MAX_VALUE, expected: true },
  { actual: Number.MIN_VALUE, expected: true },
  { actual: undefined, expected: false },
  { actual: 10n, expected: false },
  { actual: Function, expected: false },
  { actual: Symbol("foo"), expected: false },
  { actual: new Date(), expected: false },
  { actual: NaN, expected: false },
  { actual: Infinity, expected: false },
  { actual: -Infinity, expected: false },
];

test.each<Test>(tests)("isJSONValue($actual) === $expected", ({ actual, expected }) => {
  expect(isJSONValue(actual)).toBe(expected);
});
