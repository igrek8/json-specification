import { InvalidJSONArrayError } from "./InvalidJSONArrayError";
import { isJSONValue } from "./isJSONValue";
import type { JSONValue } from "./JSONValue";

export function assertJSONValue(
  value: unknown,
  maxDepth: number = Infinity
): asserts value is JSONValue {
  if (!isJSONValue(value, maxDepth)) {
    throw new InvalidJSONArrayError(value);
  }
}
