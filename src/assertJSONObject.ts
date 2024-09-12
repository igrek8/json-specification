import { InvalidJSONObjectError } from "./InvalidJSONObjectError";
import { isJSONObject } from "./isJSONObject";
import type { JSONObject } from "./JSONObject";

export function assertJSONObject(
  value: unknown,
  maxDepth: number = Infinity
): asserts value is JSONObject {
  if (!isJSONObject(value, maxDepth)) {
    throw new InvalidJSONObjectError(value);
  }
}
