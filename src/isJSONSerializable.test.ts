import { expect, test } from "vitest";
import { isJSONSerializable } from "./isJSONSerializable";

interface Test {
  actual: unknown;
  expected: boolean;
}

const tests: Test[] = [
  {
    actual: {},
    expected: false,
  },
  {
    actual: new Date(),
    expected: true,
  },
];

test.each<Test>(tests)("isJSONSerializable($actual) === $expected", ({ actual, expected }) => {
  expect(isJSONSerializable(actual)).toBe(expected);
});
