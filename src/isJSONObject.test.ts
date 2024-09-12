import { expect, test } from "vitest";
import { isJSONObject } from "./isJSONObject";

interface Test {
  actual: unknown;
  maxDepth?: number;
  expected: boolean;
}

const tests: Test[] = [
  { actual: { a: { b: { c: 1 } } }, expected: true },
  { actual: { a: { b: { c: undefined } } }, expected: true },
  { actual: { a: { b: { c: 1n } } }, expected: false },
  { actual: { a: { b: { c: 1n } } }, maxDepth: 1, expected: true },
];

test.each<Test>(tests)("isJSONObject($actual) === $expected", ({ actual, maxDepth, expected }) => {
  expect(isJSONObject(actual, maxDepth)).toBe(expected);
});
