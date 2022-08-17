var number = document.querySelectorAll(".number");
var co = document.querySelectorAll(".co");
var input = document.getElementById("input");
var number1;
var number2;
var op;
var i = 0;
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {
        input.value += parseInt(e.target.innerHTML);
    })

}

var i = 0;
for (var i = 0; i < co.length; i++) {
    co[i].addEventListener("click", function (e) {
        var last = input.value;
        var laast = last[last.length - 1];
        if (laast === "+" || laast === "-" || laast === "*" || laast === "/" || laast === "^" || laast === "%" || laast === ".") {
            var newstring = last.substring(0, last.length - 1) + e.target.innerHTML;
            input.value = newstring;
        } else if (last.length == 0) {

            console.log("enter a number first");
        } else {

            input.value += e.target.innerHTML;

        }
    })
}


var ac = document.getElementsByClassName("ac");
ac[0].addEventListener("click", function () {
    input.value = "";
    input.setAttribute("placeholder", "0")
})
var tv = document.getElementsByClassName("tv");

function pow(e) {
    op = e.innerHTML;
    if (op === "^" || op === "%") {
        number1 = parseInt(input.value);
        input.value = "";
        input.setAttribute("placeholder", number1 + op)
    }

};


function ev() {
    number2 = parseInt(input.value);
    var result;
    switch (op) {
        case "+" :
            result = calculator.input.value = eval(calculator.input.value);
            break;
        case "/" :
            result = calculator.input.value = eval(calculator.input.value);
            break;
        case "*" :
            result = calculator.input.value = eval(calculator.input.value);
            break;
        case "-" :
            result = calculator.input.value = eval(calculator.input.value);
            break;
        case '^' :
            result = Math.pow(number1, number2);
            break;
        case '%' :
            result = number1 / 100 * number2;
            break;
        default:
            "error"

    }
    input.value = result;
}

var back = document.getElementsByClassName("back");
back[0].addEventListener("click", function () {
    calculator.input.value = calculator.input.value.slice(0, -1);
    if (input.value === "") {
        input.setAttribute("placeholder", "0");
    }
})