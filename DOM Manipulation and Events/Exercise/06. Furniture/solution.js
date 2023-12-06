function solve() {
  let text = document.getElementsByTagName('textarea');
  

  let buttons = document.getElementsByTagName('button');
  let generateBtn = buttons[0];
  let buyBtn = buttons[1];

  let table = document.querySelectorAll('tbody');


  generateBtn.addEventListener('click', generate);
  function generate(event) {
    let inputField = text[0].value;
    let inputArr = JSON.parse(inputField);

    for (let i = 0; i < inputArr.length; i++) {

      let tr = document.createElement('tr');

      let imgTd = document.createElement('td');
      let img = document.createElement('img');
      img.src = inputArr[i].img;
      imgTd.appendChild(img);
      tr.appendChild(imgTd);

      let nameTd = document.createElement('td');
      let nameP = document.createElement('p');
      nameP.textContent = inputArr[i].name;
      nameTd.appendChild(nameP);
      tr.appendChild(nameTd);

      let priceTd = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = inputArr[i].price;
      priceTd.appendChild(priceP);
      tr.appendChild(priceTd);

      let decTd = document.createElement('td');
      let decP = document.createElement('p');
      decP.textContent = inputArr[i].decFactor;
      decTd.appendChild(decP);
      tr.appendChild(decTd);

      let checkTd = document.createElement('td');
      let checkInput = document.createElement('input');
      checkInput.type = 'checkbox';
      checkTd.appendChild(checkInput);
      tr.appendChild(checkTd);
      
      table[0].appendChild(tr);
      text[0].value = '';

    } 

  }


  buyBtn.addEventListener('click', buy);
  function buy(event) {
    let tables = Array.from(document.querySelectorAll('tbody tr'));
    
    let sum = 0;
    let average = 0;
    let furniture = [];

    for (const table of tables) {
      let type = table.querySelector('td:nth-child(2)').textContent;
      let isChcked = table.querySelector('input[type="checkbox"]');
      let price = Number(table.querySelector('td:nth-child(3)').textContent);
      let decFactor = Number(table.querySelector('td:nth-child(4)').textContent);

      
      if (isChcked.checked) {
        sum += price;
        average += decFactor;
        furniture.push(type);
      }

      text[1].value = `Bought furniture: ${furniture.join(", ")}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${average / furniture.length}`;
      
    }

  }

}