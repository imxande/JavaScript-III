/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding. "This", refers to the global object (In the global context)
* 2. Implicit binding. "This", refers to the object when dot notation is use to invoke a function. 
* 3. New binding. When we use a constructor function "This" will refer to the specific moment of the object that is created and return by the constructor.
* 4. Explicit binding. When call or apply method is used.
*
* write out a code example of each explanation above
*/

console.log("**********Principle 1**********")
// Principle 1
// Global Binding
// code example for Window Binding
function myFunct(){
  console.log(this.myVar);
}

var myVar = "This is my variable content";
myFunct();

console.log("**********Principle 2**********")
// Principle 2

// code example for Implicit Binding
const myObj = {
    name: "Ale",
    age: 32,
    speak: function(name){
        console.log(this.name);
    }
}
  myObj.speak();

  console.log("**********Principle 3**********")
// Principle 3

// code example for New Binding
function Make(favourite){
    this.car = favourite;
    }
   
   let myFavouriteCar = new Make('Audi');
   
console.log(`My favourite car is ${myFavouriteCar.car}`);

console.log("**********Principle 4**********")
// Principle 4

// code example for Explicit Binding
function Person(personality){
    this.country = personality.country
    this.favMusic = personality.favMusic
    this.food = personality.food
    this.favSport = personality.favSport
    this.speak = function () {
        return `Hello, I'm from ${this.country}`;
    };
}

const lopez = new Person({
   country: "China",
   favMusic: 'Salsa',
   food: 'KBQ',
   favSport: 'Baseball'
 });

 console.log(lopez); 