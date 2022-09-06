function attachEventsListeners() {
  let obj = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };

  document.getElementById("convert").addEventListener("click", () => {
    const inputField = Number(document.querySelector("input[id=inputDistance]").value);
    const outputField = document.querySelector("input[id=outputDistance]");
    const inputUnit = document.getElementById("inputUnits").value;
    const outputUnit = document.getElementById("outputUnits").value;
    const unit = inputField * obj[inputUnit];
    const convertedUnit = unit / obj[outputUnit];
    outputField.value = convertedUnit;
  });
}
