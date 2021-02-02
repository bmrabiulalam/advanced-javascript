// Falsy: false, 0, "", undefined, null, NaN
// Truthy: arr = [], obj = {} and anything else, even negative numbers (e.g -2, -6, etc) are truthy values

let nameVar = '';

if(nameVar){
    console.log('condition is true');
}
else {
    console.log('condition is false');
}