import { expect, test } from "vitest";
import { InvalidJSONValueError } from "./InvalidJSONValueError";
import { toJSONString } from "./toJSONString";

interface Test {
  actual: unknown;
  expected: unknown;
}

const tests: Test[] = [
  {
    actual: true,
    expected: "true",
  },
  {
    actual: false,
    expected: "false",
  },
  {
    actual: +0,
    expected: "0",
  },
  {
    actual: -0,
    expected: "0",
  },
  {
    actual: "foo",
    expected: '"foo"',
  },
  {
    actual: null,
    expected: "null",
  },
  {
    actual: undefined,
    expected: new InvalidJSONValueError(undefined),
  },
  {
    actual: NaN,
    expected: new InvalidJSONValueError(NaN),
  },
  {
    actual: +Infinity,
    expected: new InvalidJSONValueError(+Infinity),
  },
  {
    actual: -Infinity,
    expected: new InvalidJSONValueError(-Infinity),
  },
  {
    actual: 42n,
    expected: new InvalidJSONValueError(42n),
  },
  {
    actual: new Date("2021-01-01T00:00:00Z"),
    expected: '"2021-01-01T00:00:00.000Z"',
  },
  {
    actual: { b: 2, a: 1 },
    expected: '{"a":1,"b":2}',
  },
  {
    actual: {
      toJSON() {
        return [[1n]];
      },
    },
    expected: new InvalidJSONValueError([[1n]]),
  },
  {
    actual: [[1n]],
    expected: new InvalidJSONValueError([[1n]]),
  },
  {
    actual: new Set([1, 2, 3]),
    expected: new InvalidJSONValueError(new Set([1, 2, 3])),
  },
  {
    actual: new Map([
      ["b", 2],
      ["a", 1],
    ]),
    expected: new InvalidJSONValueError(
      new Map([
        ["b", 2],
        ["a", 1],
      ])
    ),
  },
  {
    actual: Function,
    expected: new InvalidJSONValueError(Function),
  },
  {
    actual: Symbol("foo"),
    expected: new InvalidJSONValueError(Symbol("foo")),
  },
];

test.each<Test>(tests)("toJSONString($actual) -> $expected", ({ actual, expected }) => {
  if (expected instanceof Error) {
    expect(() => toJSONString(actual)).toThrow(expected);
  } else {
    expect(toJSONString(actual)).toEqual(expected);
  }
});
