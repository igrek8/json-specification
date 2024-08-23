import { InvalidJSONValueError } from "./InvalidJSONValueError";

export class InvalidJSONObjectError extends InvalidJSONValueError {
  public override name = "InvalidJSONObjectError";

  constructor(public readonly value: unknown) {
    super("Invalid JSON object");
  }
}
