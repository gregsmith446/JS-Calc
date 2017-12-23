function run(number) {
    document.getElementById("answer").value += number;
}

function runDecimal() {
    document.getElementById("answer").value += ".";
}

function runClear() {
    document.getElementById("answer").value = "";
}

function runDivide() {
    document.getElementById("answer").value += "/";
}

function runMultiply() {
    document.getElementById("answer").value += "*";
}

function runAdd() {
    document.getElementById("answer").value += "+";
}

function runSubtract() {
    document.getElementById("answer").value += "-";
}

function equals() { //yay it works!
    var total = eval(document.getElementById("answer").value);
    document.getElementById("answer").value = total;
}
