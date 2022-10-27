"use strict";
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    else
        return income * 1.3;
}
const taxVariable = calculateTax(10000, 2022);
console.log(taxVariable);
//# sourceMappingURL=functions.js.map