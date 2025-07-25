//Function currying

/*let multiply = function(x, y){
    console.log( x * y )
}
multiply(2, 3)

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(5)

let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(5)*/

let multiply = function(x){
    return function(y){
        console.log(x * y)
    }
}

let multiplyByTwo = multiply(2)
multiplyByTwo(5)

let multiplyByThree = multiply(3)
multiplyByThree(5)