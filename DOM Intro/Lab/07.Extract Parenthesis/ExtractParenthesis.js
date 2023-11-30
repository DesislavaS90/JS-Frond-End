function extract(content) {
   const text = document.getElementById('content').textContent
   const words = []

   let regex = /\(([^)]+)\)/g;
   let result = text.match(regex);

   for (const r of result) {
      words.push(r.slice(1, -1)); 
     
   }
   
   
   return words.join('; ');

}