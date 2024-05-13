"use strict";
let foodNames = ["steak fajitas", "chips & guac", "sweet tea"];
// for (let index = 0; index < familyName.length; index++) {
//   console.log(familyName[index]);
// }

let lunch = [
  { item: "steak fajitas", price: 9.95 },
  { item: "chips & guac", price: 5.25 },
  { item: "sweet tea", price: 2.79 },
];

let subtotal = 0;
for (let index = 0; index < lunch.length; index++) {
  const element = lunch[index];
  console.log(element);
}
