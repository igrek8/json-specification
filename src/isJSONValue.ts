import { isJSONArrayImpl } from "./isJSONArray";
import { isJSONObjectImpl } from "./isJSONObject";
import type { JSONValue } from "./JSONValue";

export function isJSONValueImpl(
  value: unknown,
  maxDepth: number,
  depth: number
): value is JSONValue {
  switch (typeof value) {
    case "boolean":
      return true;
    case "number":
      return Number.isFinite(value);
    case "string":
      return true;
    case "object":
      if (depth > maxDepth) {
        return true;
      }
      if (value === null) {
        return true;
      }
      if (Array.isArray(value)) {
        return isJSONArrayImpl(value, maxDepth, depth + 1);
      }
      return isJSONObjectImpl(value, maxDepth, depth + 1);
    default:
      return false;
  }
}

export function isJSONValue(value: unknown, maxDepth: number = Infinity) {
  return isJSONValueImpl(value, maxDepth, 0);
}
