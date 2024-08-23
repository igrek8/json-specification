import { expect, test } from "vitest";
import { isJSONObject } from "./isJSONObject";

interface Test {
  actual: unknown;
  expected: boolean;
}

const tests: Test[] = [
  { actual: { a: { b: { c: 1 } } }, expected: true },
  { actual: { a: { b: { c: 1n } } }, expected: false },
];

test.each<Test>(tests)("isJSONObject($actual) === $expected", ({ actual, expected }) => {
  expect(isJSONObject(actual)).toBe(expected);
});
