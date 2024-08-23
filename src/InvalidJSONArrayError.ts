import { InvalidJSONValueError } from "./InvalidJSONValueError";

export class InvalidJSONArrayError extends InvalidJSONValueError {
  public override name = "InvalidJSONArrayError";

  constructor(public readonly value: unknown) {
    super("Invalid JSON array");
  }
}
