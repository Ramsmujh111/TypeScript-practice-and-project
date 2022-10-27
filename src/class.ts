/**
 * Class in TypeScript 
 *   Define a object for class 
 *   Make property
 *   Make function
 *   Define Data types of functions and property
 *   Define data type to params
 */

class App {
    name:string = 'Ram smujh'
    getName():string{
        console.log(this.name);
        return this.name;
    }
}

let a1 = new App();

// console.log(a1.getName());

/**
 * Inheritance
 * extend the Property parent class To child class That is class Inheritance
 * 
 * 
 */
class Parent{
    // name:string;
    // public name:string = 'Ambikesh Gautham';
    name:string | undefined
    setName(name:string){
        return this.name = name
    }
}
class Child extends Parent{

    getName():string | undefined{
        return this.name
    }
}
let c1 = new Child();
c1.setName('Just check for the Evaluation and going the test ')
console.log(c1.getName());
