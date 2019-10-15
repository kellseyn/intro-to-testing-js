// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input === 'number') {
        return helloWorld();
    } else if (input === ""){
        return helloWorld();
    } else if (typeof input !== 'string') {
        return helloWorld();
    } else {
        return "Hello, " + input + "!";
    }
}
function isFive(num1) {
    return num1 == '5';
}

function isEven(num2) {
    if (typeof parseInt(num2) === NaN || typeof parseInt(num2) === undefined || typeof num2 === 'boolean' || typeof num2 === 'string'){
        return false;
    } else if(num2 % 2 === 0){
        return true;
    } else{
        return false;
    }

}
console.log(isEven("infinity"));
function isVowel(string) {
    return ((string === "A") || (string === "E") || (string === "I") || (string === "O") || (string === "U") || (string === "a") || (string === "e") || (string === "i") || (string === "o") || (string === "u"));
}
function add(x, y) {
    if (isNaN(x) || isNaN(y)){
        return "NaN";
    }
    return parseInt(x) + parseInt(y);
    // console.log(typeof "5" )
}

