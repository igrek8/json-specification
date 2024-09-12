import type { JSONIteratorItemPath } from "./JSONIteratorItemPath";
import type { JSONValue } from "./JSONValue";

export class JSONIteratorItem {
  constructor(public readonly path: JSONIteratorItemPath[], public readonly value: JSONValue) {}
}
