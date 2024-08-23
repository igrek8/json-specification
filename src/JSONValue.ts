import type { JSONArray } from "./JSONArray";
import type { JSONObject } from "./JSONObject";

/**
 * @see https://datatracker.ietf.org/doc/html/rfc7159#section-3
 */
export type JSONValue = false | null | true | JSONObject | JSONArray | number | string;
