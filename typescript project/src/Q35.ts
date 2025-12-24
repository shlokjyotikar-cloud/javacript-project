function calculateSpeed(distance: number, time: number): number {
  return distance / time;
}

const calculatedSpeed = calculateSpeed(150, 3);
console.log(calculatedSpeed);