import { InvalidJSONObjectError } from "./InvalidJSONObjectError";
import { isJSONObject } from "./isJSONObject";
import type { JSONObject } from "./JSONObject";

export function assertJSONObject(value: unknown): asserts value is JSONObject {
  if (!isJSONObject(value)) {
    throw new InvalidJSONObjectError(value);
  }
}
