//Closures

/*function a(){
    let x = 10
    function b(){
        console.log(x)
    }
    b()
}

a()*/

//what will happen if fn was returned

/*function a(){
    let x = 10
    function b(){
        console.log(x)
    }
    return b       //when fn is returned it not only return fn but the closure ie. fn along with its lexical env. so 
                   //it still remembers reference to x even if a execution context vanishes.
}

const c = a()
console.log(c)

c() // still print 10 */

/*function a(){
    let x = 10
    function b(){
        console.log(x)
    }
    x =100
    return b       
}

const c = a()
console.log(c)

c()*/ // still print 100 as it remembers not the value but reference to x

function d() {
    const y = 20
  function a() {
    let x = 10;
    function b() {
      console.log(x, y);
    }
    b()
  }
  return a
}

const c = d();
//console.log(c);

c();    // will print both x, y as it keeps looking in the scope chain and remembers its reference.
        // hence, they are not garbage collcted until the pgm closes
        // disadv -> if we have lots of closures, it will take lots of memory

//Adv of closure -> Data hiding and encapsulation

function counter(){
  var count = 0
  return function incrementCounter(){
    count++
    console.log(count)
  }
}

var counter1 = counter()  //we can access count variable only via increment counter. so the data is hidden
counter1()  //1
counter1()  //2

var counter2 = counter() 
counter2()  //1 -> this will have fresh copy of count