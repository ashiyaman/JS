//Promises

//Disadv of callback

//1. Callback hell
//When a async function is dependent on another async function, it will result in lots of nested callbacks.
//the codebase will start to grow horizontally. Also called Pyramid of Doom

/*api.createOrder(cart, function(){
    api.proceedPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet(){}
        })
    })
})*/

//2. Inversion of Control
//proceedPayment will only run when createOrder will complete. But we dont know how much
//time it will take. What if there was problem in createOrder or proceedPayment is called
//twice. control of fn proceedPayment is in control of createOrder fn.

//Hence /***********Promises************/

//Consume Promise

const cart = ["shoes", "handbags", "belts"]

//Create Promise

function createOrder(cart){
    const pr = new Promise((resolve, reject) => {
        //validate cart
        //create order
        //get order id
        if(validateCart(cart) === true){
            console.log('in true...')
            const orderId = "1234"
            if(orderId){
                setTimeout(() => resolve(orderId), 1000)
            }
        }
        else{
            const err = new Error("Cart is not valid")
            reject(err)
        }        
    })

    return pr
}

function validateCart(cart){
    return true
}

function proceedToPayment(){
    return new Promise(function(resolve, reject){
        resolve("Payment successful with orderId" )
    })
}

createOrder(cart)
    .then(orderId => {
        console.log(orderId)
        return proceedToPayment(orderId)
    })
    .then(paymentInfo => console.log(paymentInfo))
    .catch(err => console.log(err))

createOrder()