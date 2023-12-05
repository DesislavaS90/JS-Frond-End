function focused() {
    let divSections = Array.from(document.getElementsByTagName('input'));

    console.log(divSections);

    for (let div of divSections) {
        div.addEventListener('focus', onFocus);
        div.addEventListener('blur', onBlur);
    }

    function onFocus(event) {
        event.target.parentNode.className = 'focused';
    }

    function onBlur(event) {
        event.target.parentNode.className = '';
    }
}