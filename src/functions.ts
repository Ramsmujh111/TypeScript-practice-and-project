/**
 * Functions in typeScript
 *   Define a normal functions
 *   Define a functions types
 *   Add param in functions
 *   define param types
 *   Optional params with type
 */

// function Cals(a:number , b?:number):number{
//     return b?a+b:a;
// }
// // console.log();
// console.warn(Cals(2));

function calculateTax(income:number , taxYear:number):number{
    if(taxYear < 2022)
        return income * 1.2;
    else
        return income * 1.3;
}
const taxVariable:number = calculateTax(10000 , 2022);
console.log(taxVariable);