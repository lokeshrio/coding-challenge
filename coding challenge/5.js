var flight_fare = [];

var input = require('readline-sync');

for (let i = 0; i < 5; i++) {

    var flight = parseFloat(input.question("enter the flight fare: "));

    flight_fare.push(flight);

}

console.log("Flight fare: ")

console.log(flight_fare);




var arodd=[];

var areven=[];



flight_fare.forEach((i)=>{

    if(i%2 == 0){

        areven.push(i)



    }

    else{

        arodd.push(i)

    }

   

})

console.log("Odd numberrs are: ")

    console.log(arodd)

    console.log("Even numberrs are: ")

    console.log(areven)