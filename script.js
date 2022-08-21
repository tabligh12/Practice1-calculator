var number = document.querySelectorAll(".number");
var co = document.querySelectorAll(".co");
var input = document.getElementById("input");
var input2 = document.getElementById("input2");
var number1;
var number2;
var op;
var i = 0;

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {
        input.value += parseInt(e.target.innerHTML);
        input2.value += parseInt(e.target.innerHTML);
    })

}

var i = 0;
for (var i = 0; i < co.length; i++) {
    co[i].addEventListener("click", function (e) {
        op = e.target.innerHTML;
        var last = input.value;
        var laast = last[last.length - 1];
        var last2 = input2.value;
        var laast2 = last2[last2.length - 1];
        if (laast === "+" || laast === "-" || laast === "*" || laast === "/" || laast === "^" || laast === "%" || laast === ".") {
            var newstring = last.substring(0, last.length - 1) + e.target.innerHTML;
            input.value = newstring;
        } else if (laast2 === "+" || laast2 === "-" || laast2 === "*" || laast2 === "/" || laast2 === "^" || laast2 === "%" || laast2 === ".") {
            var newstring2 = last2.substring(0, last2.length - 1) + e.target.innerHTML;
            input2.value = newstring2;
        } else if (last.length == 0 || last.length == 0) {

            console.log("enter a number first");
        } else if (op === "^" || op === "%") {
            number1 = parseInt(input.value);
            input2.value = "";
            input.value += op;
            input2.setAttribute("placeholder", number1 + op)
        } else {

            input.value += e.target.innerHTML;
            input2.value += e.target.innerHTML;

        }
    })
}


var ac = document.getElementsByClassName("ac");
ac[0].addEventListener("click", function () {
    input.value = "";
    input2.value = "";
    input.setAttribute("placeholder", "0")
    input2.setAttribute("placeholder", "0")
})


function ev() {

    number2 = parseInt(input2.value);

    var result;
    switch (op) {
        case "+" :
            result = input.value = eval(input.value);
            break;
        case "/" :
            result = input.value = eval(input.value);
            break;
        case "*" :
            result = input.value = eval(input.value);
            break;
        case "-" :
            result = input.value = eval(input.value);
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

    input.value = result.toLocaleString();
    input2.value = result.toLocaleString();

}

var back = document.getElementsByClassName("back");
back[0].addEventListener("click", function () {
    input.value = input.value.slice(0, -1);
    input2.value = input2.value.slice(0, -1);
    if (input.value === "" || input2.value === "") {
        input.setAttribute("placeholder", "0");
        input2.setAttribute("placeholder", "0");
    }
});

var au = document.getElementsByClassName("au");
au[0].addEventListener("click", function (e) {

        var last = input.value;
        var laast = last[last.length - 1];
        var last2 = input2.value;
        var laast2 = last2[last2.length - 1];
        if (laast === ".") {
            var newstring = last.substring(0, last.length - 1) + e.target.innerHTML;
            input.value = newstring;
        } else {
            input.value += e.target.innerHTML;
            input2.value += e.target.innerHTML;
        }
    }
)

