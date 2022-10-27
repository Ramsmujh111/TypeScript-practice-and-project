/**
 * enum in Typescript
 * what is enum
 * Make a program with variable
 * Use enum with variable
 * Use enum variable
 * Use enum with functions
 * 
 */

// enum is set of values when we using a variable so its must be same values as enum value
// enum which represent list of related the const
enum Days{
    // mon,tue,wed,thu,fri,sat,sun
    mon = 'Monday',
    tue = 'Tuesday'
}
// let whichDay:Days;
// whichDay = 'test'

function whichDay(day:Days){
    return day
}
console.log(whichDay(Days.mon));