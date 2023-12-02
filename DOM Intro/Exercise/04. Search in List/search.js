function search() {
   let input = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('li'));
   let result = document.getElementById('result');
   let counter = 0;
   
   
   towns.forEach(town => {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
   })

   for (const town of towns) {
      if (town.textContent.includes(input)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;
      }  
   }

   result.textContent = `${counter} matches found`;

   


}
