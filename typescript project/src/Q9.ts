function fahrenheitToCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9;
}

const celsius = fahrenheitToCelsius(68);
console.log(celsius); 
