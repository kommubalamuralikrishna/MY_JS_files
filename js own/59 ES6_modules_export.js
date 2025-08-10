export const Pi = 3.14159;

export function getCircumference(radius) {
  return 2 * Pi * radius;
}

export function getArea(radius) {
  return Pi * radius * radius;
}

export function getVolume(radius) {
  return (4 / 3) * Pi * radius * radius * radius;
}