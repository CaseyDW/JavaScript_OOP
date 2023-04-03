// Exercise 1
class Person {
    constructor(name, pets, residence, hobbies) {
     this.name = name;
     this.pets = pets;
     this.residence = residence;
     this.hobbies = hobbies;
    }

    addHobby(hobby){
        this.hobbies.push(hobby);

    }

    removeHobby(hobby) {
        let foundIdx = this.hobbies.indexOf(hobby);

        let valuesBefore = this.hobbies.slice(0, foundIdx);
        let valuesAfter = this.hobbies.slice(foundIdx + 1);
        this.hobbies = valuesBefore.concat(valuesAfter);
  
    }

    greeting()  {
     console.log("Hello fellow person!");
    }

    toString() {
        return Object.values(this).toString();
    }
}
  
//Exercise 2
class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);

        this.occupation = occupation;
}
greeting() {
    console.log("Hello, I am a coder!");
}
}

//Exercise 3
let coder = new Coder(
    "Casey", 
    1, 
    "Columbus", 
    ["music", "dancing", "learning"], 
    "Full Stack Web Developer"
);

coder.addHobby("painting");

console.log(coder);

coder.removeHobby("dancing");

console.log(coder);

coder.greeting(); 

console.log(coder.toString())


//Exercise 4

class Calculator {
result = 0;

    add(a, b) {
        let res;

        if (b == undefined) {
        res = this.result + a;
        } else {
            res = a + b;
        }
   this.result = res;
   return this.result;
    }

    subtract(a, b){
        let res;

        if (b == undefined) {
        res = this.result - a;
        } else {
            res = a - b;
        }
    this.result = res;
    return this.result;
    }
  
    multiply(a, b) {
        let res;

        if (b == undefined) {
        res = this.result * a;
        } else {
            res = a * b;
        }
        this.result = res;
        return this.result;
    }

    divide(a, b) {
        let res;

        if (b == undefined) {
        res = this.result / a;
        } else {
            res = a / b;
        }
        this.result = res;
        return this.result;
    }

    display() {
        console.log(this.result);
    }
}
 let calc = new Calculator();
 
 
 
 calc.add(10);
 calc.subtract(2);
 calc.multiply(4);
 calc.divide(2);
 calc.display();
 