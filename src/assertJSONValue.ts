import { InvalidJSONArrayError } from "./InvalidJSONArrayError";
import { isJSONValue } from "./isJSONValue";
import type { JSONValue } from "./JSONValue";

export function assertJSONValue(value: unknown): asserts value is JSONValue {
  if (!isJSONValue(value)) {
    throw new InvalidJSONArrayError(value);
  }
}
