function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let text = document.getElementById('searchField');
      let rows = Array.from(document.querySelectorAll('tbody tr'));


      for (const row of rows) {
         row.classList.remove('select');
         if (text.value !== '' && row.textContent.includes(text.value)) {
            row.className = 'select';
         }
      }

      text.value = '';

   }
}