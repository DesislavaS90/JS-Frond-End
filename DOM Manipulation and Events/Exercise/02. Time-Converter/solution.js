function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    console.log(days);

    let buttons = Array.from(document.querySelectorAll('input[type="button"]'));

    buttons.forEach(button => {
        button.addEventListener('click', convertTime)
    })

    function convertTime(event) {
        let currentButton = event.currentTarget.id;
        let currentTextfield = event.currentTarget.previousElementSibling;
        let value = Number(currentTextfield.value);

        
        if (currentButton === 'daysBtn') {
            hours.value = value * 24;
            minutes.value = value * 24 * 60;
            seconds.value = value * 24 * 60 * 60;
        } else if (currentButton === 'hoursBtn') {
            days.value = value / 24;
            minutes.value = value * 60;
            seconds.value = value * 60 * 60;
        } else if (currentButton === 'minutesBtn') {
            days.value = value / (24 * 60);
            hours.value = value / 60;
            seconds.value = value * 60;
        } else if (currentButton === 'secondsBtn') {
            days.value = value / (24 * 60 * 60);
            hours.value = value / (60 * 60);
            minutes.value = value / 60;
        }
    }


}

    
