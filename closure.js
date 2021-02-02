// closure is: call a function inside a function or return a function from another. and when you create an internal scope but can not access from outside

function outerFun(){
    let count = 0;
    return function innerFun(){
        return count++;
    }
}

const clock1 = outerFun();
console.log(clock1());
console.log(clock1());
console.log(clock1());
const clock2 = outerFun();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());

function outerFun(){
    let count = 0;
    function innerFun(){
        return count++;
    }
    innerFun();
}
