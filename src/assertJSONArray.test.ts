import { expect, test } from "vitest";
import { assertJSONArray } from "./assertJSONArray";
import { InvalidJSONValueError } from "./InvalidJSONValueError";

test("asserts json array", () => {
  expect(() => assertJSONArray([[1n]])).toThrowError(InvalidJSONValueError);
  expect(() => assertJSONArray([[1]])).not.toThrowError(InvalidJSONValueError);
});
