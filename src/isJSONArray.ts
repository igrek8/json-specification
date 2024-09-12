import { isJSONValueImpl } from "./isJSONValue";
import type { JSONArray } from "./JSONArray";

export function isJSONArrayImpl(
  value: unknown,
  maxDepth: number,
  depth: number
): value is JSONArray {
  if (depth > maxDepth) {
    return true;
  }
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (!isJSONValueImpl(value[i], maxDepth, depth + 1)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export function isJSONArray(value: unknown, maxDepth: number = Infinity): value is JSONArray {
  return isJSONArrayImpl(value, maxDepth, 0);
}
