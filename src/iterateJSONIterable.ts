import type { JSONIterable } from "./JSONIterable";
import { JSONIteratorItem } from "./JSONIteratorItem";
import type { JSONIteratorItemPath } from "./JSONIteratorItemPath";
import type { JSONValue } from "./JSONValue";

function* iterateJSONIterableImpl(
  value: JSONValue | undefined,
  path: JSONIteratorItemPath[],
  maxDepth: number,
  depth: number
): IterableIterator<JSONIteratorItem> {
  if (depth >= maxDepth) {
    if (value === undefined) {
      return;
    }
    yield new JSONIteratorItem(path, value);
    return;
  }
  switch (typeof value) {
    case "boolean":
      yield new JSONIteratorItem(path, value);
      break;
    case "number":
      if (Number.isFinite(value)) {
        yield new JSONIteratorItem(path, value);
      }
      break;
    case "string":
      yield new JSONIteratorItem(path, value);
      break;
    case "object":
      if (value === null) {
        yield new JSONIteratorItem(path, value);
      } else if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          yield* iterateJSONIterableImpl(value[i], [...path, i], maxDepth, depth + 1);
        }
      } else {
        for (const key in value) {
          yield* iterateJSONIterableImpl(value[key], [...path, key], maxDepth, depth + 1);
        }
      }
      break;
  }
}

export function iterateJSONIterable(
  iterable: JSONIterable,
  maxDepth: number = Infinity
): IterableIterator<JSONIteratorItem> {
  return iterateJSONIterableImpl(iterable, [], maxDepth, 0);
}
