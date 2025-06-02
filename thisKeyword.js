//This 

/*const obj1 = {
    name: 'Ashiya',
    print: function (){
        console.log(this.name)
    }
}
obj1.print()*/

const student1 = {
    name: 'Ashiya',
    print: function (){
        console.log(this.name)
    }
}
student1.print()

const student2 = {
    name: 'Zainab'
}

student1.print.call(student2)

const obh2 = {
    a: 10,
    obj1: {
    name: 'Zaid',
    print: () => {
        console.log(this)
    }
}
}


obh2.print()