// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input === 'boolean') {
        return helloWorld();
    } else if (input === null){
            return helloWorld();
    } else if (input === ""){
        return helloWorld();
    } else if (input === undefined) {
        return helloWorld();
    } else if (typeof input === 'number') {
        return helloWorld();
    } else if (typeof !isNaN(parseFloat(input)) === 'number' && 'string') {
        return helloWorld();
    } else {
        return "Hello, " + input + "!";
    }
}