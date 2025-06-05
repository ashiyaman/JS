/*for(var i = 1; i <= 5; i++ ){
    setTimeout(() => {  //its a closure, so it remembers the ref to i
        console.log(i)  //by the time settimeout is run i becomes 6 and since there is only 1 i all the 5 copies to 
    }, i * 1000)        //settimeout will have same value
}
console.log('Hello world')*/

/*for(let i = 1; i <= 5; i++ ){
    setTimeout(() => {  //its a closure, but since we use let, a new i is created created and closure saves fn settimeout 
        console.log(i)  //along with its ref to variable i
    }, i * 1000)    
}
console.log('Hello world')*/


for(var i = 1; i <= 5; i++ ){
    function close(x){
        setTimeout(() => {  //it works same as using let since settime
            console.log(x)  //
        }, i * 1000)    
    }
    close(i)
}
console.log('Hello world')