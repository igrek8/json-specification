import type { JSONValue } from "./JSONValue";

export function fromJSONString(jsonString: string): JSONValue {
  return JSON.parse(jsonString);
}
