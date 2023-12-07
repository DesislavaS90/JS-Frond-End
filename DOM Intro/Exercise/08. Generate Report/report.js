function generateReport() {
    const checkBoxes = document.querySelectorAll('thead tr th input');
    const table = Array.from(document.querySelectorAll('tbody tr'));
    const output = document.getElementById('output');

    const colInfo = {};
    const tableInfoChecked = [];

   
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            colInfo[checkBoxes[i].name] = i;
        }
    }

   
    for (let i = 0; i < table.length; i++) {
        const rowInfo = {};

        
        for (const [key, value] of Object.entries(colInfo)) {
            rowInfo[key] = table[i].children[value].textContent;
        }

        
        tableInfoChecked.push(rowInfo);
    }

    
    output.textContent = JSON.stringify(tableInfoChecked, null, 2);
}
