// Modular JavaScript is a JavaScript style of building apps in a components building approach. If you want to use modular JavaScript, add a type "module" into the sript tag.

import sayMyColor from "./color.js"
import sayMyFavFood from "./food.js"


let result = sayMyColor()
console.log(result)

let myFood = sayMyFavFood()
console.log(myFood)

import { sayMyFavFood as femi, sayMyPet as steven } from "./food.js"
// let food = sayMyFavFood()
// let pet = sayMyPet()

// We can also import with an alias
// let food = femi()
// let pet = steven()

// console.log(food, pet)

import { sayMyColor, sayMyBrand } from "./color.js"
import { sayMyFavFood, sayMyPet } from "./food.js"
import sayMyCountry from "./country.js"

let color = sayMyColor()
let food = sayMyFavFood()
let pet = sayMyPet()
let country = sayMyCountry()
let brand = sayMyBrand()

console.log(color, food, pet, country, brand)