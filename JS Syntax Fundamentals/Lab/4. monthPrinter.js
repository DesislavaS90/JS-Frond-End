function month(num){
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    if (num > 12 || num <= 0){
        console.log("Error!")

    }else{
        console.log(months[num - 1])
    }
}

month(1)