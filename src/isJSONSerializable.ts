import type { JSONSerializable } from "./JSONSerializable";

export function isJSONSerializable(value: unknown): value is JSONSerializable {
  return (
    typeof value === "object" &&
    value !== null &&
    "toJSON" in value &&
    typeof value.toJSON === "function"
  );
}
