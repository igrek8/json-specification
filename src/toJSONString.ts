import { InvalidJSONValueError } from "./InvalidJSONValueError";
import { isPlainObject } from "./isPlainObject";
import type { JSONObject } from "./JSONObject";

/**
 * Deterministically converts a JavaScript value to a JSON string.
 */
export function toJSONString(value: unknown, space?: number): string {
  return JSON.stringify(value, toJSONValue, space);
}

function toJSONValue(_: string, value: unknown) {
  switch (typeof value) {
    case "boolean":
      return value;
    case "number":
      if (Number.isFinite(value)) {
        return value;
      }
      break;
    case "string":
      return value;
    case "object":
      if (value === null) {
        return null;
      }
      if (Array.isArray(value)) {
        return value;
      } else if (isPlainObject(value)) {
        const object: JSONObject = Object.create(null);
        const properties = Object.getOwnPropertyNames(value).sort();
        for (const property of properties) {
          object[property] = (value as JSONObject)[property];
        }
        return object;
      }
      break;
  }
  throw new InvalidJSONValueError(value);
}
