var pass1=[]

var pass2=[]



var input = require('readline-sync')



for (let i = 0; i < 2; i++) {



    var name = input.question("type the passenger name: ")

    pass1.push(name)

}



for (let i = 0; i < 2; i++) {



    var name2 = input.question("type the passenger destination: ")

    pass2.push(name2)

}
2


const combined=pass1.concat(pass2);

console.log(combined);