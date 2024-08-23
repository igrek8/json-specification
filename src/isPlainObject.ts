export function isPlainObject(value: unknown): value is object {
  if (!value) return false;
  const proto = Object.getPrototypeOf(value);
  return proto == null || proto === Object.prototype;
}
