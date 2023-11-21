function meetingAppointments(input) {

    const meetingSchedule = {};

    for (const iterator of input) {

        let [day, name] = iterator.split(' ');

        if (meetingSchedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingSchedule[day] = name;
            console.log(`Scheduled for ${day}`);   
        }
        
    }

    Object.entries(meetingSchedule).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`);
    })
    
}

meetingAppointments(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])