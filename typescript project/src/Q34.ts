function calculateDistance(speed: number, time: number): number {
  return speed * time;
}

const travelDistance = calculateDistance(60, 2);
console.log(travelDistance);
