import { expect, test } from "vitest";
import { iterateJSONIterable } from "./iterateJSONIterable";
import type { JSONIterable } from "./JSONIterable";
import { JSONIteratorItem } from "./JSONIteratorItem";

interface Test {
  actual: JSONIterable;
  maxDepth?: number;
  expected: JSONIteratorItem[];
}

const tests: Test[] = [
  { actual: {}, expected: [] },
  { actual: { a: 1 }, expected: [new JSONIteratorItem(["a"], 1)] },
  { actual: { a: true }, expected: [new JSONIteratorItem(["a"], true)] },
  { actual: { a: "string" }, expected: [new JSONIteratorItem(["a"], "string")] },
  { actual: { a: null }, expected: [new JSONIteratorItem(["a"], null)] },
  { actual: { a: [1] }, expected: [new JSONIteratorItem(["a", 0], 1)] },
  { actual: { a: { b: [1] } }, expected: [new JSONIteratorItem(["a", "b", 0], 1)] },
  { actual: { a: [[1]] }, maxDepth: 1, expected: [new JSONIteratorItem(["a"], [[1]])] },
  { actual: { a: { b: [1] } }, maxDepth: 1, expected: [new JSONIteratorItem(["a"], { b: [1] })] },
  { actual: { a: undefined }, maxDepth: 1, expected: [] },
];

test.each<Test>(tests)("iterateJSONValue($actual)", ({ actual, maxDepth, expected }) => {
  expect(Array.from(iterateJSONIterable(actual, maxDepth))).toStrictEqual(expected);
});
