function cylinderVolume(radius: number, height: number): number {
  return Math.PI * radius * radius * height;
}

const cylinderVolumeValue = cylinderVolume(3, 10);
console.log(cylinderVolumeValue);