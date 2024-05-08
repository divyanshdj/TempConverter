function convert() {
  const degree = document.getElementById("degree");
  const type = document.querySelector("#temp-type");
  const result = document.getElementById("result");

  const value = parseFloat(degree.value);
  const typeValue = type.options[type.selectedIndex].value;

  let answer = "";

  if (typeValue === "Celsius") {
    const fahrenheit = (value * 9) / 5 + 32;
    const kelvin = value + 273.15;
    answer = `Fahrenheit: ${fahrenheit.toFixed(3)}°F<br>Kelvin: ${kelvin.toFixed(3)}K`;
  } 
  
  else if (typeValue === "Fahrenheit") {
    const celsius = ((value - 32) * 5) / 9;
    const kelvin = ((value - 32) * 5) / 9 + 273.15;
    answer = `Celsius: ${celsius.toFixed(3)}°C<br>Kelvin: ${kelvin.toFixed(3)}K`;
  } 
  
  else {
    const celsius = value - 273.15;
    const fahrenheit = ((value - 273.15) * 9) / 5 + 32;
    answer = `Celsius: ${celsius.toFixed(3)}°C<br>Fahrenheit: ${fahrenheit.toFixed(3)}°F`;
  }

  result.innerHTML = answer;
}
