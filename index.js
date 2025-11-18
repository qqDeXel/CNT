var message = 'Hello World!';
var age = 18;
var isAdmin = true;
var slovo;
slovo = 42;
console.log("Число:", slovo, "Тип:", typeof slovo);
slovo = "Hello World";
console.log("Строка:", slovo, "Тип:", typeof slovo);
slovo = true;
console.log("Boolean:", slovo, "Тип:", typeof slovo);
var a = 55;
var b = 34;
console.log(a + b);
console.log(a - b);
var c = 25;
var d = 4;
var suma = c + d;
if (suma % 2 === 0) {
    console.log(suma, "является чётной");
}
else {
    console.log(suma, "является нечётной");
}
var score = 0;
score++;
score++;
score++;
score--;
score--;
var wallet = 1000;
console.log("Начало:", wallet);
wallet += 200;
console.log("+200:", wallet);
wallet *= 0.7;
console.log("-30%:", wallet);
wallet /= 2;
console.log("÷2:", wallet);
var speed = 40;
var isRoadClear = false;
if (speed > 60 && !isRoadClear) {
    console.log("Опасно");
}
else {
    console.log("Можно ехать");
}
var sum = 0;
for (var i = 1; i <= 10; i++) {
    console.log(sum += i);
}
var hasKey = true;
var knowsPassword = false;
if (hasKey && knowsPassword) {
    console.log("Полный доступ");
}
else if (hasKey || knowsPassword) {
    console.log("Ограниченный доступ");
}
else {
    console.log("Доступ запрещён");
}
for (var i = 1; i <= 10; i++) {
    console.log(5 * i);
}
var n = 6;
var factorial = 1;
for (var i = 1; i <= n; i++) {
    factorial *= i;
    console.log(i = factorial);
}
function add(q, e) {
    return q + e;
}
console.log("1 + 2 =", add(1, 2));
console.log("11 + 12 =", add(11, 12));
function greet(name) {
    console.log("Привет,", name);
}
greet("Иван");
function isEven(number) {
    return number % 2 === 0;
}
console.log("4:", isEven(4));
console.log("7:", isEven(7));
function square(number) {
    return number * number;
}
console.log("5:", square(5));
console.log("3:", square(3));
function compareNumbers(j, k) {
    if (j > k) {
        return "первое больше";
    }
    else if (k > j) {
        return "второе больше";
    }
    else {
        return "равны";
    }
}
console.log("1, 2:", compareNumbers(1, 2));
console.log("2, 7:", compareNumbers(2, 7));
console.log("Возраст:");
// @ts-ignore
process.stdin.once("data", function (d) {
    var n = Number(d);
    if (n < 18) {
        console.log("Доступ запрещён");
    }
    else {
        console.log("Таблица умножения:");
        for (var i = 1; i <= 10; i++) {
            console.log(n + " × " + i + " = " + (n * i));
        }
    }
    // @ts-ignore
    process.exit();
});
function calculate(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: throw new Error("Invalid operator");
    }
}
