"use strict";
function cylinderVolume(radius, height) {
    return Math.PI * radius * radius * height;
}
const cylinderVolumeValue = cylinderVolume(3, 10);
console.log(cylinderVolumeValue);
