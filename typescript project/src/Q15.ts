function rectanglePerimeter(length: number, width: number): number {
  return 2 * (length + width);
}

const totalLength = rectanglePerimeter(5, 10);
console.log(totalLength);
