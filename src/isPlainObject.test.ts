import { expect, test } from "vitest";
import { isPlainObject } from "./isPlainObject";

interface Test {
  actual: unknown;
  expected: boolean;
}

const tests: Test[] = [
  { actual: {}, expected: true },
  { actual: Object.create(null), expected: true },
  { actual: Object.create({}), expected: false },
  { actual: new Error("foo"), expected: false },
  { actual: null, expected: false },
];

test.each<Test>(tests)("isPlainObject($actual) === $expected", ({ actual, expected }) => {
  expect(isPlainObject(actual)).toBe(expected);
});
