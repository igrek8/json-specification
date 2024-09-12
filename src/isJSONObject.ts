import { isJSONValueImpl } from "./isJSONValue";
import { isPlainObject } from "./isPlainObject";
import type { JSONObject } from "./JSONObject";

export function isJSONObjectImpl(
  value: unknown,
  maxDepth: number,
  depth: number
): value is JSONObject {
  if (depth > maxDepth) {
    return true;
  }
  if (isPlainObject(value)) {
    for (const key in value) {
      const val = (value as JSONObject)[key];
      if (!isJSONValueImpl(val, maxDepth, depth + 1)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export function isJSONObject(value: unknown, maxDepth: number = Infinity): value is JSONObject {
  return isJSONObjectImpl(value, maxDepth, 0);
}
