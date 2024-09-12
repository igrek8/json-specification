import { InvalidJSONValueError } from "./InvalidJSONValueError";
import { isJSONArray } from "./isJSONArray";
import type { JSONArray } from "./JSONArray";

export function assertJSONArray(
  value: unknown,
  maxDepth: number = Infinity
): asserts value is JSONArray {
  if (!isJSONArray(value, maxDepth)) {
    throw new InvalidJSONValueError(value);
  }
}
