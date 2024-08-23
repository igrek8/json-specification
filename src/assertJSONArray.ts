import { InvalidJSONValueError } from "./InvalidJSONValueError";
import { isJSONArray } from "./isJSONArray";
import type { JSONArray } from "./JSONArray";

export function assertJSONArray(value: unknown): asserts value is JSONArray {
  if (!isJSONArray(value)) {
    throw new InvalidJSONValueError(value);
  }
}
