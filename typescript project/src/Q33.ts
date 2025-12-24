
function secondsToMinutes(seconds: number): number {
  return seconds / 60;
}

function secondsToHours(seconds: number): number {
  return seconds / 3600;
}

const minutesValue = secondsToMinutes(300);
console.log(minutesValue);

const hoursValue = secondsToHours(7200);
console.log(hoursValue);