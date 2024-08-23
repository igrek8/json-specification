import { isJSONArray } from "./isJSONArray";
import { isJSONObject } from "./isJSONObject";
import type { JSONValue } from "./JSONValue";

export function isJSONValue(value: unknown): value is JSONValue {
  switch (typeof value) {
    case "boolean":
      return true;
    case "number":
      return Number.isFinite(value);
    case "string":
      return true;
    case "object":
      return value === null || isJSONArray(value) || isJSONObject(value);
    default:
      return false;
  }
}
