export class InvalidJSONValueError extends Error {
  public override name = "InvalidJSONValueError";

  constructor(public readonly value: unknown) {
    super("Invalid JSON value");
  }
}
