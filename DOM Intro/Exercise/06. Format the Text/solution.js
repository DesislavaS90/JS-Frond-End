function solve() {

  let text = document.getElementById('input').value;
  let output = document.getElementById('output');
  

  let textAsArr = text.split('.')
                  .map(x => x.trim())
                  .filter(x => x !== '')

  
  for (let i = 0; i < textAsArr.length; i += 3) {
    
    let paragraphText = textAsArr.slice(i, i + 3).join('. ') + '.';
    
    let p = document.createElement('p');
    p.textContent = paragraphText;
    output.appendChild(p);
  }
  }
  


