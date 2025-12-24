
function hoursToMinutes(hours: number): number {
  return hours * 60;
}

function minutesToSeconds(minutes: number): number {
  return minutes * 60;
}

const totalMinutes = hoursToMinutes(2); 
console.log(totalMinutes);

const totalSeconds = minutesToSeconds(5);
console.log(totalSeconds);
