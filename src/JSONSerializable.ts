import type { JSONValue } from "./JSONValue";

export interface JSONSerializable {
  toJSON(): JSONValue;
}
