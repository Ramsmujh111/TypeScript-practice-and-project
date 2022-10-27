// Aliases types of variable and functions
type Employee = {
    readonly id: number,
    name: string,
    retire: (date:Date) => void
}

let employee1:Employee = {
    id:1,
    name:'unknown',
    retire:(date:Date) => {
        console.log(date);
    }
}
// console.log(employee1);

// union types variable and functions

function kgToLbs(weight:number | string):number{
    // narrowing 
    if(typeof weight === 'number'){
        return weight * 2.2
    }else{
        return parseInt(weight) * 2.2;
    }
}
// console.log(kgToLbs('10'));

/**
 * using & for the example
 */
// let chekValue:string & number;
// // chekValue = 12;

type Draggable = {
     drag: () => void
}

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget ={
    drag: () =>{},
    resize:() =>{},
}