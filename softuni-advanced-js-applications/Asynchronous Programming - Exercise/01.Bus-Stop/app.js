async function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const busesParent = document.getElementById("buses");
  const busStop = document.getElementById("stopName");

  try {
    const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
    const data = await response.json();
    busesParent.textContent = "";
    busStop.textContent = data.name;

    for (const [id, time] of Object.entries(data.buses)) {
      const li = document.createElement("li");
      li.textContent = `Bus ${id} arrives in ${time} minutes`;
      busesParent.appendChild(li);
    }
  } catch (err) {
    busesParent.textContent = "";
    busStop.textContent = "Error";
  }
}
