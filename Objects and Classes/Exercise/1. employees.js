function employees(empliyeesArr) {
    
    const employeesDetails = empliyeesArr.map((employee) => {
        const name = employee  
        const personalNumber = employee.length

        return {
            name,
            personalNumber
        }
        
    })
    

    employeesDetails.forEach((employee) => 
    console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))
    
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])