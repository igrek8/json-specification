import { expect, test } from "vitest";
import { assertJSONObject } from "./assertJSONObject";
import { InvalidJSONObjectError } from "./InvalidJSONObjectError";

test("asserts json object", () => {
  expect(() => assertJSONObject({ a: { b: { c: 10n } } })).toThrow(InvalidJSONObjectError);
  expect(() => assertJSONObject({ a: { b: { c: 10 } } })).not.toThrow(InvalidJSONObjectError);
});
