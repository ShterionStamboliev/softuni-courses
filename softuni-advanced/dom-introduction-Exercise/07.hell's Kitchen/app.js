function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
   let textField = JSON.parse(document.querySelector("#inputs textarea").value);
   let obj = {};
   let avgSum = 0;
   let currentAvg = 0;
   let bestResto = '';

    for (let info of textField) {
      let restInfo = info.split(" - ");
      let restaurantName = restInfo.shift();
      let workers = restInfo[0].split(", ");

      for (let worker of workers) {
        let [workerName, workerSalary] = worker.split(" ");
        workerSalary = Number(workerSalary);
        if (!obj[restaurantName]) {
          obj[restaurantName] = {};
        }
        if (obj[restaurantName]) {
           obj[restaurantName][workerName] = workerSalary;
        }
      }
    }

    for (let [restoName, workers] of Object.entries(obj)) {
      let worker = Object.keys(workers);
      let salaries = Object.values(workers).sort((a, b) => b[1] - a[1]);
      console.log(salaries);
      avgSum = salaries.reduce((a, b) => a + b, 0) / worker.length;

      if (avgSum > currentAvg) {
         currentAvg = avgSum;
         bestResto = worker[0];
      }
      
      let res = "";
      worker.forEach(person => res += `Name: ${person[0]} With Salary: ${person[1]} `);
      document.querySelector("#bestRestaurant p").textContent = `Name: ${restoName} Average Salary: ${avgSum.toFixed(2)} Best Salary: ${Math.max(...salaries.map(w => w.workerSalary)).toFixed(2)}`;
      document.querySelector("#workers p").textContent = res;
    }
}
}

