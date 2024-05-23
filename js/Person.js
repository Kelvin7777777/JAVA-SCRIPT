{
    const Person = {
        Firstame:"Kelvin",
        Lastname:"Mwangi",
        Age: 18
    }
    console.log(Person.Firstame)

    const Person2 ={
        Firstame:"John",
        Lastname:"Muna",
        yob: 1996,
        age: function (currentyear) {
            return currentyear-this.yob;
         }
     }
     console.log(Person2.age(2024))
 
     const car ={

        type: "Subru",
        color: "Silver",
        yom: 2006,

        age: function (currentyear) {
            return currentyear-this.yom
        }
        }
        console.log(car.age(2024))

        const numbers= [5,6,7,8];
        console.log(numbers)
        console.log(numbers[3
            
        ])
        }

