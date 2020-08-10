var zero = document.querySelector(".zero");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");

var plus = document.querySelector(".arithmetic_plus");
var Minus_sign = document.querySelector(".arithmetic_Minus_sign");
var multiplication = document.querySelector(".arithmetic_multiplication");
var division = document.querySelector(".arithmetic_division");

var dot = document.querySelector(".dot");
var AC = document.querySelector(".AC");

var equal = document.querySelector(".equal");

var input = document.getElementById("top");


//清空
AC.addEventListener("click", function () {
    input.value = "";
});


//等於
equal.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = eval(A)
    console.log(eval(A))
    console.log(input.value)
});



//小數點
dot.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + ".";
    console.log(input.value)
});



//加減乘除
plus.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + "+";
    console.log(input.value)
});

Minus_sign.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + "-";
    console.log(input.value)
});

multiplication.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + "x";
    console.log(input.value)
});

division.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + "/";
    console.log(input.value)
});




//0-9
zero.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + 0;
    console.log(input.value)
});

one.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + 1;
    console.log(input.value)
});

two.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + 2;
    console.log(input.value)
});

three.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + 3;
    console.log(input.value)
});

four.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + 4;
    console.log(input.value)
});

five.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + 5;
    console.log(input.value)
});

six.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + 6;
    console.log(input.value)
});

seven.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + 7;
    console.log(input.value)
});

eight.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + 8;
    console.log(input.value)
});

nine.addEventListener("click", function () {
    let A = input.value;
    console.log(A);

    input.value = A + 9;
    console.log(input.value)
});