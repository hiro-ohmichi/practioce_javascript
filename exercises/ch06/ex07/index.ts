export function assign(destination: object, source: object) {
  destination = { ...source };
  return destination;
}
