/**
 * Typed Object
 *   define typed object
 *   update property
 *   add new property
 *   define a custom type object
 *   use any with object
 */
// using interface to describe the property types
interface usersTypes {
    name:string,
    age:number,
    address:string
}
let users:usersTypes = {
    name:'Bruce',
    age:123,
    address:'USA'
}
//1. we can't override the other casting
// users.name = 200;

// 2. it can't allow to define a new Property for ex
// users.email = 'dev.@gmail.com'

Object.defineProperty(users , "email" ,{
    value: 'dev.@gmail.com'
})
// console.log(users);

/**
 * second example
 */
let employee:{
    readonly id: number,
    name: string,
    retire:(date:Date) => void
} = {id: 1 , name:"Kajal chamain" , retire:(date:Date) =>{
    console.log(date);
}};
employee.name = 'Mosh';
console.log(employee.retire);