//Callback

setTimeout(() => {  //this function which will be called later after the time interval is callback
    console.log('This is set Timeout')
}, 4000)

function x(y){
    console.log("x")
}
x()

//Callback in event listeners

/*let count = 0       //Can do this but creating global vars is not good
document.getElementById("clickBtn")
    .addEventListener("click", function xyz(){
        console.log("Button Clicked", ++count)
    })*/

function attachEventListener(){
    let count = 0       
    document.getElementById("clickBtn")
        .addEventListener("click", function xyz(){  //addeventlistener forms a closure along with var vount
            console.log("Button Clicked", ++count)
        })
}
attachEventListener()

