function solve() {
  const form = document.querySelectorAll("input");
  const hireWorkerButton = document.getElementById("add-worker");
  const tBodyField = document.getElementById("tbody");
  const sumId = document.getElementById("sum");

  hireWorkerButton.addEventListener("click", (e) => {
    e.preventDefault();

    if ([...form].forEach((input) => input.value.trim() === "")) {
      return;
    };

    const obj = {};
    [...form].forEach((x) => {
      obj[x.id] = x.value;
    });

    const tr = elements("tr");
    elements("td", obj.fname, "", tr);
    elements("td", obj.lname, "", tr);
    elements("td", obj.email, "", tr);
    elements("td", obj.birth, "", tr);
    elements("td", obj.position, "", tr);
    elements("td", obj.salary, "", tr);

    const td = elements("td", "", "", tr);
    const tdFiredButton = elements("button", "Fired", "fired", td);
    const tdEditButton = elements("button", "Edit", "edit", td);
    tBodyField.appendChild(tr);

    const salary = Number(sumId.textContent);
    sumId.textContent = (Number(obj.salary) + salary).toFixed(2);
    [...form].forEach((x) => (x.value = ""));

    tdEditButton.addEventListener("click", (event) => {
      event.preventDefault();

      [...form].forEach((input) => {
        input.value = obj[input.id];
      });
      workerSalary(obj.salary);
      event.target.parentElement.parentElement.remove();
    });

    tdFiredButton.addEventListener("click", (ev) => {
      ev.preventDefault();
      ev.target.parentElement.parentElement.remove();
      workerSalary(obj.salary);
    });
  });

  function elements(type, text, className, parentEl) {
    const element = document.createElement(type);
    element.textContent = text;

    if (className) {
      element.setAttribute("class", className);
    }
    if (parentEl) {
      parentEl.appendChild(element);
    }
    return element;
  }

  function workerSalary(sum) {
    const salary = Number(sumId.textContent);
    sumId.textContent = Math.abs(Number(sum) - salary).toFixed(2);
  }
}
solve();
