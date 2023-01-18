//Получить средний возраст
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [vasya, petya, masha];
alert(getAverageAge(arr));
console.log(getAverageAge(arr));

//Сортировать в порядке по убыванию
//let arr = [5, 2, 1, -10, 8];
//arr.sort((a, b) => b - a);
//alert(arr);
//console.log(arr);

//Трансформировать в массив имён
//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 28 };
//let users = [vasya, petya, masha];
//let names = users.map((item) => item.name);
//alert(names);
//console.log(names);

//Трансформировать в объекты
//let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
//let petya = { name: "Петя", surname: "Иванов", id: 2 };
//let masha = { name: "Маша", surname: "Петрова", id: 3 };
//let users = [vasya, petya, masha];
//let usersMapped = users.map((user) => ({
//fullName: `${user.name} ${user.surname}`,
//id: user.id,}));
//alert(usersMapped[0].id); // 1
//alert(usersMapped[0].fullName);
//console.log(usersMapped[0].id);
//console.log(usersMapped[0].fullName);

//Функция pow(x,n)
//function pow(x, n) {
//var result = x;
//for (var i = 1; i < n; i++) {
//result *= x;
//}
//return result;
//}
//var x = prompt("x?", "");
//var n = prompt("n?", "");
//if (n <= 1) {
//alert("Степень " + n + "не поддерживается, введите целую степень, большую 1");
//} else {
//alert(pow(x, n));
//}

//Перепишите функцию, используя оператор '?' или '||'
//function checkAge(age) {
//return age > 18 || confirm("Родители разрешили?");}
//function checkAge(age) {
//return age > 18 ? true : confirm("Родители разрешили?");}

//Перепишите с использованием функции-стрелки
//function ask(question, yes, no) {
//if (confirm(question)) yes();
//else no();}
//ask(
//"Вы согласны?",
//() => alert("Вы согласились."),
//() => alert("Вы отменили выполнение."));
