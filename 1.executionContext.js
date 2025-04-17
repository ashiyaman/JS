//global execution context is created
//1. memory creation phase - all var n fn are allocated memory 
// n: undefined, square: function square(){...}, square2: undefined, square3: undefined

var n = 3

function square(num) {
    var result = num * num
    return result
}

var square2 = square(n)
var square3 = square(6)

console.log(square2)
console.log(square3)

//code execution phase: code run line by line
//n: 3, in line 12, another execution context is created...
//after fn returned, EC is popped out
//main ie. global execution context is exit

///all EC is in call stack which keeps track of which context is executing, order of execution, etc