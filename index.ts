let message: string = 'Hello World!'; 
let age: number = 18; 
let isAdmin: boolean = true;

let slovo: any;

slovo = 42;
console.log("Число:", slovo, "Тип:", typeof slovo);

slovo = "Hello World";
console.log("Строка:", slovo, "Тип:", typeof slovo);

slovo = true;
console.log("Boolean:", slovo, "Тип:", typeof slovo);

let a: number = 55;
let b: number = 34;
console.log(a + b); 
console.log(a - b);  


let c = 25;
let d = 4;


let suma = c + d;

if (suma % 2 === 0) {
    console.log(suma, "является чётной");
} else {
    console.log(suma, "является нечётной");
}

let score = 0
score++
score++
score++
score--
score--

let wallet = 1000;
console.log("Начало:", wallet);

wallet += 200;    
console.log("+200:", wallet);

wallet *= 0.7;   
console.log("-30%:", wallet);

wallet /= 2;       
console.log("÷2:", wallet);

let speed = 40;
let isRoadClear = false;

if (speed > 60 && !isRoadClear) {
    console.log("Опасно");
} else {
    console.log("Можно ехать");
}
    
let sum = 0;
for (let i = 1; i <= 10; i++) {
    console.log(sum += i);
}


let hasKey = true;
let knowsPassword = false;

if (hasKey && knowsPassword) {
    console.log("Полный доступ");
} else if (hasKey || knowsPassword) {
    console.log("Ограниченный доступ");
} else {
    console.log("Доступ запрещён");
}


for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}


let n = 6;
let factorial = 1;


for (let i = 1; i <= n; i++) {
    factorial *= i;
    console.log(i! = factorial);
}