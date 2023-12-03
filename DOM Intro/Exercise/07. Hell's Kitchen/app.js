function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);
 
   function onClick() {
     let input = JSON.parse(document.querySelector("#inputs textarea").value);
     let bestRestaurant = findBestRestaurant(restourantObjCreation(input));
     let workers = sortWorkersFromBestRestaurant(restourantObjCreation(input));
 
     document.querySelector("#bestRestaurant > p").textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.highestSalary.toFixed(2)}`;
     document.querySelector("#workers > p").textContent = workers;
   }
 
   function restourantObjCreation(input) {
     let restourantObj = {};
 
     input.forEach((line) => {
       let [key, value] = line.split(" - ");
 
       if (restourantObj.hasOwnProperty(key)) {
         restourantObj[key].push(...value.split(", "));
       } else {
         restourantObj[key] = [...value.split(", ")];
       }
     });
 
     return restourantObj;
   }
 
   function findBestRestaurant(obj) {
     let bestRestaurantInfo = {
       name: '',
       averageSalary: 0,
       highestSalary: 0,
     };
 
     for (const [key, value] of Object.entries(obj)) {
       let totalSalary = 0;
       let highestSalary = 0;
 
       value.forEach((worker) => {
         let [name, salary] = worker.split(" ");
         totalSalary += Number(salary);
 
         if (Number(salary) > highestSalary) {
           highestSalary = Number(salary);
         }
       });
 
       let averageSalary = (totalSalary / value.length).toFixed(2);
 
       if (averageSalary > bestRestaurantInfo.averageSalary ||
           (averageSalary === bestRestaurantInfo.averageSalary && Object.keys(obj).indexOf(key) < Object.keys(obj).indexOf(bestRestaurantInfo.name))) {
         bestRestaurantInfo = {
           name: key,
           averageSalary: Number(averageSalary),
           highestSalary: highestSalary,
         };
       }
     }
 
     return bestRestaurantInfo;
   }
 
   function sortWorkersFromBestRestaurant(obj) {
     let bestRestaurant = findBestRestaurant(obj);
     let workers = obj[bestRestaurant.name] || [];
 
     workers.sort((a, b) => {
       let [nameA, salaryA] = a.split(" ");
       let [nameB, salaryB] = b.split(" ");
       return Number(salaryB) - Number(salaryA);
     });
 
     return workers.map(worker => `Name: ${worker.split(" ")[0]} With Salary: ${worker.split(" ")[1]}`).join(" ");
   }
 }