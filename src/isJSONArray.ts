import { isJSONValue } from "./isJSONValue";
import type { JSONArray } from "./JSONArray";

export function isJSONArray(value: unknown): value is JSONArray {
  return Array.isArray(value) && value.every(isJSONValue);
}
