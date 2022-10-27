"use strict";
class App {
    constructor() {
        this.name = 'Ram smujh';
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
}
let a1 = new App();
class Parent {
    setName(name) {
        return this.name = name;
    }
}
class Child extends Parent {
    getName() {
        return this.name;
    }
}
let c1 = new Child();
c1.setName('Just check for the Evaluation and going the test ');
console.log(c1.getName());
//# sourceMappingURL=class.js.map