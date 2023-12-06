function solve() {

    const quickCheckBtn = document.getElementsByTagName('button')[0];
    const clearBtn = document.getElementsByTagName('button')[1];

    const table = Array.from(document.querySelectorAll('tbody > tr'));

    const tableSelector = document.querySelector('table');
    const textResult = document.querySelector('#check p');


    quickCheckBtn.addEventListener('click', check);

    function check(event) {

        const matrix = table.map(row =>
        Array.from(row.children, cell => cell.querySelector('input').value)
        );

    let isSudoкu = true;

    for (let i = 0; i < matrix.length; i++) {
            let rowSet = new Set(matrix[i]);
            let colSet = new Set(matrix.map(row => row[i]));

            if (rowSet.size !== matrix[i].length || colSet.size !== matrix.length) {
                isSudoкu = false;
                break;
            }
    }


    if (isSudoкu) {
        tableSelector.style.border = '2px solid green';
        textResult.style.color = 'green';
        textResult.textContent = 'You solve it! Congratulations!';    
    } else {
        tableSelector.style.border = '2px solid red';
        textResult.style.color = 'red';
        textResult.textContent = 'NOP! You are not done yet...';
    }
}

    clearBtn.addEventListener('click', clear);
    function clear(event) {

        tableSelector.style.border = 'none';
        textResult.textContent = '';

        for (let i = 0; i < table.length; i++) {
            let row = table[i];
            for (let j = 0; j < row.children.length; j++) {
                let cell = row.children[j];
                let input = cell.querySelector('input');
                input.value = '';
            }
        }

    }
  
}