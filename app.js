// // MAP FUNCTION
// var bears = ['brown', 'grizzly', 'angry', 'charming'];
// var mrBears = bears.map(addMister)
// //Named function 
// function addMister(bear) {
//   return 'Mr. ' + bear;
// }


// // FILTER FUNCTION
// var myFaveBears = bears.filter(isFavourite)
// //Named function 
//  function isFavourite(bear) {
//   return bear === 'brown' || bear === 'angry'
// }
 
// const myFunctions = {
//   isFavourite,
//   addMister
// }

// console.log(myFunctions.addMister("iury"))
// console.log(myFunctions.isFavourite("brown"))

// const monkey = {
//   name: "ted", species: "chinpanze", foodsEaten: ["pear", "banana", "apple"] 
// },
// {
//   name: "Bob", species: "madrill", foodsEaten: ["pear", "banana", "apple"] 
// },
// {
//   name: "Tom", species: "golden Lion", foodsEaten:["pear", "banana", "apple"] 
// }

// monkey.eatSomething = (food) => {
//   console.log(`${food}`)
// }

// monkey.introduction = monkey.map(introduce)

// function introduce(name, species, foodsEaten) {
//   console.log(`Hi, my name is ${name}`)
// }

// const myFuntionsReturn = {
//   introduce
// }

// console.log(myFuntionsReturn.introduce(monkey.name))

// const monkey = {};

// const introduction = (name, species, food) => {
//     console.log(`hello ${name}, you are ${species} and you eat ${food}`);
// }
// monkey.name = 'peter parker';
// monkey.species = 'spider';
// monkey.age = 42
// monkey.foods = ['banana'];
// monkey.eatSomething = (food) => {
//     console.log(`food eaten ${food}`);
// };
// monkey.introduction = introduction;

// console.log(monkey.introduction(monkey.name, monkey.species, monkey.foods[0]));

// ///////////////////

// const primate = {
//     name: 'mr. orange',
//     species: 'orangatan',
//     foods: ['banana', 'insects', 'nuts'],
// };
// console.log(primate.name);
/*
* CONSTRUCTOR FUNCTION
*/
// function Person (name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person('Harry', 33);
// let person2 = new Person('John', 23);

// console.log(person1);
// console.log(person2);


// function Monkeys(name, species, foodsEaten) {
//   this.name = name 
//   this.species = species
//   this.foodsEaten = foodsEaten
// }

// const monkey1 = new Monkeys('Tom', 'chinpanze', ['apple', 'pear'])
// const monkey2 = new Monkeys('Bob', 'madrill', ['pear', 'banana'])
// const monkey3 = new Monkeys('Ted', 'golden lion', ['banana, apple'])

// console.log('Hi I am ' + monkey1.name + ' and my specie is ' + monkey1.species + 'and I eat ' + monkey1.foodsEaten)
// console.log('Hi I am ' + monkey2.name + ' and my specie is ' + monkey2.species + 'and I eat ' + monkey2.foodsEaten)
// console.log('Hi I am ' + monkey3.name + ' and my specie is ' + monkey3.species + 'and I eat ' + monkey3.foodsEaten)

// function myMonkeys() {
//   monkey1,
//   monkey2,
//   monkey3
// }


/*
* CONSTRUCTOR FUNCTION
*/
// function Monkey(name, age, species, foods, introduction){
//   this.name = name;
//   this.species = species;
//   this.foods = foods;
//   this.age = age || 2;
//   this.howl = "Oooooo";
//   this.eatSomething = (food) => {
//       console.log(`food eaten ${food}`);
//   }
//   this.introduction = introduction;
// }

// const helloHowler = () => {
//   console.log('hello howler');
// }

// Monkey.prototype.gender = 'male';

// const spider = new Monkey('Peter Parker', 2, 'spider', 'other monkies', introductionMonkey);
// const howler = new Monkey('Howler Parker', 4, 'howler', ['insects', 'banana'], helloHowler);

// console.log(spider);
// console.log(howler);

