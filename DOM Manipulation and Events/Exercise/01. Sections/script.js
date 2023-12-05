function create(words) {

   let content = document.getElementById('content');

   let listDiv = []

   for (const word of words) {

      let p = document.createElement('p');
      let div = document.createElement('div');
      p.textContent = word;
      div.appendChild(p);
      listDiv.push(div);

   }

   for (const div of listDiv) {
      content.appendChild(div);
      div.querySelector('p').style.display = 'none'
      div.addEventListener('click', onClick);
   }

   function onClick(event) {
      let currentDiv = event.currentTarget
      currentDiv.querySelector('p').style.display = '';
   }
}