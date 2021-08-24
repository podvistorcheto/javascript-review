"use strict";
// desctructuring data from an array is to store small parts of data in the array in
// smaller data structures
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegaterian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Paste", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     time = "20:00",
//     address,
//     starterIndex = 1,
//     mainIndex = 0,
//   }) {
//     console.log(`Order received! Meals are
//     ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
//     and will be delivered to ${address} at ${time}`);
//   },
// };

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// // with default values
// restaurant.orderDelivery({
//   address: "Via del Sole 21",
//   starterIndex: 1,
// });

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// // // destructing the restaurant array
// // const [first, , second] = restaurant.categroies;
// // console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
// // destructuring nested array
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values to extract more elements in the array from position that dont have values
// // here 'r' does not exist in the array, hence we add a default value of one to it to extract it
// // hence it will log 8 9 1 in the console
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// DESTRUCTURING OBJECTS

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// // anohter ways to destruct object
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variabls in objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// The SPREAD OPERATOR

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegaterian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Paste", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = "20:00",
    address,
    starterIndex = 1,
    mainIndex = 0,
  }) {
    console.log(`Order received! Meals are 
      ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      and will be delivered to ${address} at ${time}`);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole 21",
  mainIndex: 2,
  starterIndex: 2,
});
// with default values
restaurant.orderDelivery({
  address: "Via del Sole 21",
  starterIndex: 1,
});
