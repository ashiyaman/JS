// const p = new Promise((res, rej) => {
//     res("Promise successfully resolved.")
// })

//Using .then
// function getData(){
//     p.then(res => console.log(res))
// }
// getData()

// //Using async await
// async await will always return promise
// async function pr(){
//     const value = await p
//     console.log(p)
// }
// pr()

//Diff btw .then and async await

// const p = new Promise((res, rej) => {
//     setTimeout(() => res("Promise successfully resolved."),
//     2000)
//  })

//Using .then
// function getData(){
//     p.then(res => console.log(res))
//     console.log("Hello World")
// }
// getData()
//Hello world will be printed first 
//after settimeout value, 'promise resolved' will printed later

//Using async await
// async function pr(){
//     const val = await p
//     console.log('Hello World') 
//     console.log(val)
// }
// pr()
//both hello world and 'promise resolved' will be printed after settimeout value

// async function pr(){
//     const val1 = await p
//     console.log('Hello World') 
//     console.log(val1)

//     const val2 = await p
//     console.log("Hello world 2")
//     console.log(val2)
// }
// pr()
//Hello World
//Promise successfully resolved.
//Hello world 2
//Promise successfully resolved.
//both promises will be resolved just just simultaneously
//its not like first promise k liye wait kiya => it will be resolved
//then 2nd promise k liye wait kiya -> it will b resolved


const p1 = new Promise((res, rej) => {
    setTimeout(() => res("Promise p1 successfully resolved."),
    6000)
 })

const p2 = new Promise((res, rej) => {
    setTimeout(() => res("Promise p2 successfully resolved."),
    4000)
 })
//both p1 and p2 will execute after 6s
//its not like p2 is run after 4ms and then p1 after 6s

//Promises p1 and p2 start their timers immediately when created(not when you await them)
//await pauses async funtion (ie.pr() goes out of call stack) until the promise resolves but doesnt restart the timer
//if you await a longer promise first, the shorter ones resolves in the background but you cant act on it until the longer
//one finishes
//if you await the shorter one first, you process it sooner, then await remaining time of the longer promise

async function pr(){
    const val1 = await p1
    console.log('Hello World') 
    console.log(val1)

    const val2 = await p2
    console.log("Hello world 2")
    console.log(val2)
}
pr()
