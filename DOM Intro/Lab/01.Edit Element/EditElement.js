function editElement(ref, match, replace) {
    const text = ref.textContent;
    
    const macher = new RegExp(match, 'g');
    

    const result = text.replace(macher, replace);

    ref.textContent = result;
    
}