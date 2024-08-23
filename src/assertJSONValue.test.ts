import { expect, test } from "vitest";
import { assertJSONValue } from "./assertJSONValue";
import { InvalidJSONArrayError } from "./InvalidJSONArrayError";

test("asserts json value", () => {
  expect(() => assertJSONValue(10n)).toThrow(InvalidJSONArrayError);
  expect(() => assertJSONValue(10)).not.toThrow(InvalidJSONArrayError);
});
