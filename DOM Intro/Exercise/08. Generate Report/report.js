function generateReport() {

    let checkBoxes = document.querySelectorAll('thead tr th input');
    let boxName = document.querySelectorAll('thead tr')[0].textContent
    let tableInfo = document.querySelectorAll('tbody tr');
    
    let result  = []
    let personObj = {}
    
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            personObj[boxName[i]] = tableInfo[i].textContent
        }
    }




    

}

   

    


