//1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));

//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arr3 = [1, 2, 3];
console.log(arr3.reverse());

//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arr4 = [1, 2, 3];
arr4.push(4, 5, 6);
console.log(arr4);

//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6);
console.log(arr5);

//5.  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
const arr6 = ["js", "css", "jq"];
arr7 = arr6.shift();
console.log(arr7);

//6.  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .
const arr8 = ["js", "css", "jq"];
arr9 = arr8.pop();
console.log(arr9);

//7.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const arr10 = [1, 2, 3, 4, 5];
const arr11 = arr10.slice(0, 3);
console.log(arr11);

//8.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const arr12 = [1, 2, 3, 4, 5];
const arr13 = arr12.slice(-2);
console.log(arr13);

//9.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const arr14 = [1, 2, 3, 4, 5];
arr14.splice(1, 2);
console.log(arr14);

//10.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const arr15 = [1, 2, 3, 4, 5];
const arr16 = arr15.splice(1, 3);
console.log(arr16);

//11.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arr17 = [1, 2, 3, 4, 5];
arr17.splice(3, 0, "a", "b", "c");
console.log(arr17);

//12.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr18 = [1, 2, 3, 4, 5];
arr18.splice(1, 0, "a", "b");
arr18.splice(-1, 0, "c");
arr18.splice(arr18.length, 0, "e");
console.log(arr18);

//13.  Дан массив [3, 4, 1, 12, 7]. Отсортируйте его.

const arr19 = [3, 4, 1, 12, 7];
arr19.sort(function (a, b) {
  return a - b;
});
console.log(arr19);

//14. Дан массив со следующими объектами внутри: {firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,} 		Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”

const userNames = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
];

userNames.forEach(function (element) {
  console.log(
    `Пользователь ${element.firstName} ${element.lastName} является ${element.gender} и ему сейчас ${element.age} лет`
  );
});

/*15. Дан массив со следующими объектами внутри:
{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}		Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).*/

const userArr = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
];

const newUserArr = userArr.map(function (element, i) {
  const newObject = structuredClone(element);
  newObject.telephoneNumber = 380670000001 + i;
  console.log(newObject);
  return newObject;
});

/*16. Дан массив со следующими объектами внутри:
{firstName: ‘Test’, lastName: ’Testovich’, age: 27, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,},		{firstName: ‘Undefined’, lastName: ’Undefinovich’, age: 99},
{firstName: ‘Null’, lastName: ’Nullovich’, gender: ‘male’}				Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол.*/

const userArr1 = [
  { firstName: "Test", lastName: "Testovich", age: 27, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
  { firstName: "Undefined", lastName: "Undefinovich", age: 99 },
  { firstName: "Null", lastName: "Nullovich", gender: "male" },
];

const result = userArr1.filter(
  (userArr1) =>
    (userArr1.age > 17 && userArr1.gender === "male") ||
    (userArr1.age > 17 && userArr1.gender === "female")
);
console.log(result);

//17. Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]]. Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.

const arr20 = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];

console.log(arr20.flat(Infinity));