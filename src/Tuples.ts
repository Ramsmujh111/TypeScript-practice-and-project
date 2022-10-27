/**
 * Tuples has fix length of array where each element has particular types 
 * Advantage of Tuples =>  we can store the data in pair of key  and value
 * for ex ->
 *     let arr:[number , string] = [1 , 'Ram'];
 * disadvantage: => it very complex to if there are multiple types as same time 
 * 2. push method is not work as javaScript functions work 
 * push method only push the data only one at one time that why
 */

let tuples: [number , string] = [1,'sandeep'];
tuples.push(1 , 'amit');
console.log(tuples);