function camelCase(text){
  let result = [];

  let textArr = text.split(' ').map(x => x.toLowerCase());;
  result.push(textArr[0]);

  
  for (let i = 1; i < textArr.length; i++) {
     result.push(textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1));
  }

  return result.join('');

}

function pascalCase(text) {
  let result = [];

  let textArr = text.split(' ').map(x => x.toLowerCase());
  
  for (let index = 0; index < textArr.length; index++) {
    result.push(textArr[index].charAt(0).toUpperCase() + textArr[index].slice(1));
  }

  return result.join('');
  
}

function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = '';

  if (convention === 'Camel Case') {
    result = camelCase(text);
  } else if (convention === 'Pascal Case') {
    result = pascalCase(text);
  }
  else{
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;

}