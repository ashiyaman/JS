//Promise API

//1. Promise.all

//All success

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 success"), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 success"), 1000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 success"), 2000)
// })

// Promise.all([p1, p2, p3]).then(res => console.log(res))

//If 1 fails

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 success"), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 success"), 1000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P3 failed after 2s"), 2000)
// })

// Promise.all([p1, p2, p3])
//     .then(res => console.log(res))
//     .catch(err => console.error(err))   // after 2s will immediately throw p3 error. will not wait for other prs to be 
                                        // settled

//2. Promise.allSettled

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 success"), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 failed"), 1000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 success"), 2000)
// })

// Promise.allSettled([p1, p2, p3]).then(res => console.log(res))  // will wait for all promises to be resolved

//Promise.race

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 success"), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 success"), 2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P3 failed"), 1000)
// })

// Promise.race([p1, p2, p3])
//     .then(res => console.log(res)) // P3 success if all resolved
//     .catch(err => console.error(err)) // P3 failed in 1ms if it fails
                                    // so it will give the first promise irrespective of it was resolved or rejected

//Promise.any

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 success"), 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("P2 failed"), 1000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P3 success"), 2000)
// })

// Promise.any([p1, p2, p3]).then(res => console.log(res)) //P3 success 
                                                        // will return 1st success; ignoring the failed promise

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P1 failed"), 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 failed"), 1000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P3 failed"), 2000)
})

Promise.any([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => {
        console.error(err) //  AggregateError: All promises were rejected  // it will return objects
        console.log(err.errors) // will return arrays => ['P1 failed', 'P2 failed', 'P3 failed']
    }
    )   