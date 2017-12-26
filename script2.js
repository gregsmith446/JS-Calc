//need something to hold the data in the input section for a separate C/CE button functionality

//function that takes a num as an arugment and is used as an onclick function 
function run(number) {
    document.getElementById("answer").value += number;
}
//function that gives the decimal button its value of "." through onclick handler
function runDecimal() {
    document.getElementById("answer").value += ".";
}
//function that gives CE button a value of empty through onclick handler
function runClear() {
    document.getElementById("answer").value = "";
}
//function that gives divide button a value of divide through onclick handler
function runDivide() {
    document.getElementById("answer").value += "/";
}
//function that gives multiply button a value of multiply through onclick handler
function runMultiply() {
    document.getElementById("answer").value += "*";
}
//function that gives add button a value of add through onclick handler
function runAdd() {
    document.getElementById("answer").value += "+";
}
//function that gives subtract button a value of subtrac through onclick handler
function runSubtract() {
    document.getElementById("answer").value += "-";
}

//function that makes the equal button calculate the value of the input data through onclick handler
function equals() { //yay it works!
    var total = eval(document.getElementById("answer").value);
    document.getElementById("answer").value = total;
}
