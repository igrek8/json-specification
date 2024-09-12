import type { JSONValue } from "./JSONValue";

/**
 * @see https://datatracker.ietf.org/doc/html/rfc7159#section-4
 */
export type JSONObject = { [key: string]: JSONValue | undefined };
