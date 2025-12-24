function sphereVolume(radius: number): number {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

const sphereVolumeValue = sphereVolume(5);
console.log(sphereVolumeValue.toFixed(2));