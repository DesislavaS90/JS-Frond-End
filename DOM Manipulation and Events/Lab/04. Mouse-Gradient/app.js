function attachGradientEvents() {

    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', onMove);
    gradient.addEventListener('mouseout', onOut);

    function onMove(event) {
        let percentige = (event.offsetX / event.target.clientWidth) * 100;
        
        result.textContent = Math.trunc(percentige) + '%';
    }

    function onOut(event) {
        result.textContent = '';

    }
}