{
    var a = 10
    let b = 20
    const c = 3
}


//Shadowing

var a = 1
let b = 2
{
    var a = 10
    let b = 20
    const c = 30
    /*console.log(a)
    console.log(b)
    console.log(c)*/
}

//console.log(a) // a = 10 as both will point to same location and var is global scoped -> shadowing
//console.log(b) // b = 2 as outer b is in script scope and inner b is in block scope -> both b are different

//Illegal shadowing

var x = 10 
{
    let x = 20
    console.log(x)
}
