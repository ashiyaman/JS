var a = 10

function x(){
    var a = 20
}

console.log(window.a)
console.log(a)
console.log(this.a)

//Implicit binding
// const talk = {
//     dog: "Woof Woof",
//     sound: function(){
//         console.log(this.dog)
//     }
// }
// talk.sound()

//Explicit binding

function talk(greeting){
    console.log(greeting + " " + this.sound)
}

const dog = {
    sound: "Woof woof"
}

let dogSound = talk.apply(dog, ["Dog says: "])







