function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let input = document.querySelector('textarea').value;
   let bestRestaurant = document.querySelector('#bestRestaurant > p').textContent;
   let workers = document.querySelector('#workers > p').textContent;


   function onClick () {
      console.log(JSON.parse(input));

   }     
}