import { isJSONSerializable } from "./isJSONSerializable";
import type { JSONObject } from "./JSONObject";
import type { JSONValue } from "./JSONValue";

export function toJSONValue(value: unknown): JSONValue {
  switch (typeof value) {
    case "undefined":
      return null;
    case "boolean":
      return value;
    case "number":
      if (Number.isFinite(value)) {
        return value;
      }
      return null;
    case "bigint":
      return value.toString();
    case "string":
      return value;
    case "symbol":
      return value.toString();
    case "function":
      return value.toString();
    case "object":
    default:
      if (value === null) {
        return null;
      }
      if (isJSONSerializable(value)) {
        return toJSONValue(value.toJSON());
      } else if (Array.isArray(value)) {
        return value.map(toJSONValue);
      } else if (value instanceof Map) {
        return toJSONValue(Object.fromEntries(value));
      } else if (value instanceof Set) {
        return Array.from(value).map(toJSONValue);
      }
      const object: JSONObject = Object.create(null);
      const properties = Object.getOwnPropertyNames(value).sort();
      for (const property of properties) {
        object[property] = toJSONValue((value as JSONObject)[property]);
      }
      return object;
  } /* c8 ignore next */
}
