
function daysToHours(days: number): number {
  return days * 24;
}

function hoursToMinutes(hours: number): number {
  return hours * 60;
}

const totalHours = daysToHours(3);
console.log(totalHours);

const totalminutes = hoursToMinutes(5);
console.log(totalminutes);

