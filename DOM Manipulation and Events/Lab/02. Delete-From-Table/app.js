function deleteByEmail() {
    
    let inputEelement = document.getElementsByName('email')[0];
    let tableElemnts = Array.from(document.querySelectorAll('tbody tr'));

    let email = inputEelement.value;
    let isRemoved = false;

    for (const currentEmail of tableElemnts) {

        if (currentEmail.children[1].textContent === email) {
            currentEmail.remove();
            isRemoved = true;
        }
        
    }

    inputEelement.value = '';

    if (isRemoved) {
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }



}