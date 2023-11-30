function sumTable() {

    let table = document.querySelectorAll('tr');
    let sum = 0;
    

    for (let i = 1; i < table.length - 1; i++) {
       const currentRow = table[i];
       sum += Number(currentRow.children[1].textContent);
          
    }

    document.getElementById('sum').textContent = sum;


}