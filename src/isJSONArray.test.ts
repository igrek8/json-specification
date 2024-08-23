import { expect, test } from "vitest";
import { isJSONArray } from "./isJSONArray";

interface Test {
  actual: unknown;
  expected: boolean;
}

const tests: Test[] = [
  { actual: [[1]], expected: true },
  { actual: [[1n]], expected: false },
];

test.each<Test>(tests)("isJSONArray($actual) === $expected", ({ actual, expected }) => {
  expect(isJSONArray(actual)).toBe(expected);
});
