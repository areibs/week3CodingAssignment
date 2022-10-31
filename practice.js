
const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32,

        name: 'Carly',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
]
    function sockPicker (customers) {
        for (i = 0; i <customers.city; i ++) {
            if (customers[i].city == "peoria") {
                console.log(customers[i].name)
            }
        }
    
    }
   
    //more customers with the same schema

