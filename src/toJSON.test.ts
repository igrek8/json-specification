import { expect, test } from "vitest";
import { toJSONValue } from "./toJSONValue";

interface Test {
  actual: unknown;
  expected: unknown;
}

const tests: Test[] = [
  {
    actual: true,
    expected: true,
  },
  {
    actual: false,
    expected: false,
  },
  {
    actual: +0,
    expected: +0,
  },
  {
    actual: -0,
    expected: -0,
  },
  {
    actual: Number.MAX_VALUE,
    expected: Number.MAX_VALUE,
  },
  {
    actual: Number.MIN_VALUE,
    expected: Number.MIN_VALUE,
  },
  {
    actual: NaN,
    expected: null,
  },
  {
    actual: Infinity,
    expected: null,
  },
  {
    actual: -Infinity,
    expected: null,
  },
  {
    actual: null,
    expected: null,
  },
  {
    actual: undefined,
    expected: null,
  },
  {
    actual: "foo",
    expected: "foo",
  },
  {
    actual: "",
    expected: "",
  },
  {
    actual: 10n,
    expected: "10",
  },
  {
    actual: [],
    expected: [],
  },
  {
    actual: { b: 2, a: 1 },
    expected: { a: 1, b: 2 },
  },
  {
    actual: new Set([1, 2, 3]),
    expected: [1, 2, 3],
  },
  {
    actual: new Map([
      ["b", 2],
      ["a", 1],
    ]),
    expected: {
      a: 1,
      b: 2,
    },
  },
  {
    actual: Function,
    expected: "function Function() { [native code] }",
  },
  {
    actual: Symbol("foo"),
    expected: "Symbol(foo)",
  },
  {
    actual: new Date("2021-01-01T00:00:00Z"),
    expected: "2021-01-01T00:00:00.000Z",
  },
  {
    actual: {
      toJSON() {
        return [10n];
      },
    },
    expected: ["10"],
  },
  {
    actual: new AggregateError([new Error("foo")]),
    expected: {
      errors: [
        {
          message: "foo",
          stack: expect.any(String),
        },
      ],
      stack: expect.any(String),
    },
  },
];

test.each<Test>(tests)("toJSON($actual) -> $expected", ({ actual, expected }) => {
  expect(toJSONValue(actual)).toEqual(expected);
});
