var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let message = 'Hello World!';
let age = 18;
let isAdmin = true;
let slovo;
slovo = 42;
console.log("Число:", slovo, "Тип:", typeof slovo);
slovo = "Hello World";
console.log("Строка:", slovo, "Тип:", typeof slovo);
slovo = true;
console.log("Boolean:", slovo, "Тип:", typeof slovo);
let a = 55;
let b = 34;
console.log(a + b);
console.log(a - b);
let c = 25;
let d = 4;
let suma = c + d;
if (suma % 2 === 0) {
    console.log(suma, "является чётной");
}
else {
    console.log(suma, "является нечётной");
}
let score = 0;
score++;
score++;
score++;
score--;
score--;
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
}
else {
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
}
else if (hasKey || knowsPassword) {
    console.log("Ограниченный доступ");
}
else {
    console.log("Доступ запрещён");
}
for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}
let n = 6;
let factorial = 1;
for (let i = 1; i <= n; i++) {
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
process.stdin.once("data", d => {
    let n = Number(d);
    if (n < 18) {
        console.log("Доступ запрещён");
    }
    else {
        console.log("Таблица умножения:");
        for (let i = 1; i <= 10; i++) {
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
// 1. Создание массива и добавление элемента
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]
// 2. Map - умножение на 10
const nums = [1, 2, 3, 4];
const multiplied = nums.map(num => num * 10);
console.log(multiplied); // [10, 20, 30, 40]
// 3. Filter - возраст 18+
const ages = [15, 18, 21, 13, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 21, 30]
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];
const foundUser = users.find(user => user.name === "Bob");
console.log(foundUser || "Пользователь не найден");
// 5. Filter + Map - положительные числа ×2
const mixedNumbers = [5, -3, 12, 0, -7, 8];
const positiveDoubled = mixedNumbers
    .filter(num => num > 0)
    .map(num => num * 2);
console.log(positiveDoubled); // [10, 24, 16]
// 6. Сортировка массивов
const sortNumbers = [10, 31, 3, 2];
// Как строки (по умолчанию)
const defaultSort = [...sortNumbers].sort();
console.log(defaultSort); // [10, 2, 3, 31]
// По возрастанию
const ascending = [...sortNumbers].sort((a, b) => a - b);
console.log(ascending); // [2, 3, 10, 31]
// По убыванию
const descending = [...sortNumbers].sort((a, b) => b - a);
console.log(descending); // [31, 10, 3, 2]
const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Keyboard", price: 75, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Webcam", price: 50, inStock: false }
];
// Товары в наличии
const inStockProducts = products.filter(product => product.inStock);
console.log(inStockProducts);
// Массив цен
const prices = products.map(product => product.price);
console.log(prices);
// Общая сумма товаров в наличии
let total = 0;
for (const product of inStockProducts) {
    total += product.price;
}
console.log(total);
// Сортировка по цене (от дешёвых к дорогим)
const sortedProducts = [...inStockProducts].sort((a, b) => a.price - b.price);
console.log(sortedProducts);
// Загрузка всех постов
function loadPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        return yield response.json();
    });
}
// Загрузка поста по ID
function loadPostById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return yield response.json();
    });
}
// Выполнение запросов
(() => __awaiter(this, void 0, void 0, function* () {
    // Первый пост
    const posts = yield loadPosts();
    const firstPost = posts[0];
    console.log(`ID: ${firstPost.id}\nTitle: ${firstPost.title}\nBody: ${firstPost.body}`);
    // Пользователи с длинными именами
    const usersResponse = yield fetch('https://jsonplaceholder.typicode.com/users');
    const users = yield usersResponse.json();
    const longNames = users.filter((user) => user.name.length > 10);
    console.log(longNames.map((user) => user.name));
    // Тексты постов
    const postsResponse = yield fetch('https://jsonplaceholder.typicode.com/posts');
    const allPosts = yield postsResponse.json();
    const postBodies = allPosts.map((post) => post.body);
    console.log(postBodies);
    // Поиск поста по заголовку
    const targetPost = allPosts.find((post) => post.title === "qui est esse");
    console.log(targetPost || "Пост не найден");
}))();
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
    const userIds = Array.from(new Set(posts.map(post => post.userId)));
    console.log(userIds);
})
    .catch(err => console.error(err));
