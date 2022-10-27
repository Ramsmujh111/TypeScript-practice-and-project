"use strict";
let users = {
    name: 'Bruce',
    age: 123,
    address: 'USA'
};
Object.defineProperty(users, "email", {
    value: 'dev.@gmail.com'
});
let employee = { id: 1, name: "Kajal chamain", retire: (date) => {
        console.log(date);
    } };
employee.name = 'Mosh';
console.log(employee.retire);
//# sourceMappingURL=objects.js.map