import { expect, test } from "vitest";
import { fromJSONString } from "./fromJSONString";

interface Test {
  actual: string;
  expected: unknown;
}

const tests: Test[] = [
  {
    actual: JSON.stringify({
      a: {
        b: {
          c: [1, 2, 3],
        },
      },
    }),
    expected: {
      a: {
        b: {
          c: [1, 2, 3],
        },
      },
    },
  },
];

test.each<Test>(tests)("fromJSONString($actual) === $expected", ({ actual, expected }) => {
  expect(fromJSONString(actual)).toEqual(expected);
});
