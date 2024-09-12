import { expect, test } from "vitest";
import { isJSONArray } from "./isJSONArray";

interface Test {
  actual: unknown;
  maxDepth?: number;
  expected: boolean;
}

const tests: Test[] = [
  { actual: [[1]], expected: true },
  { actual: [[1n]], expected: false },
  { actual: [[1n]], maxDepth: 1, expected: true },
  { actual: undefined, expected: false },
];

test.each<Test>(tests)("isJSONArray($actual) === $expected", ({ actual, maxDepth, expected }) => {
  expect(isJSONArray(actual, maxDepth)).toBe(expected);
});
