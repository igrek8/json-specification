import { isJSONValue } from "./isJSONValue";
import { isPlainObject } from "./isPlainObject";
import type { JSONObject } from "./JSONObject";

export function isJSONObject(value: unknown): value is JSONObject {
  if (value && isPlainObject(value)) {
    for (const property in value) {
      if (!isJSONValue((value as JSONObject)[property])) {
        return false;
      }
    }
    return true;
  }
  return false;
}
