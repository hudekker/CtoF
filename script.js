const celsiusSlider = document.getElementById("celsius-slider");
const celsiusValue = document.getElementById("celsius-value");
const fahrenheitResult = document.getElementById("fahrenheit-result");

celsiusSlider.addEventListener("input", () => {
  const celsius = parseFloat(celsiusSlider.value);
  const fahrenheit = (celsius * 9) / 5 + 32;

  celsiusValue.textContent = celsius.toFixed(2);
  fahrenheitResult.textContent = fahrenheit.toFixed(2);
});
