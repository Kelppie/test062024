console.log('Hello Everyone How Are You Today?')

let number1 = 20

const number2 = 30

console.log(number1)

number1 = 50

console.log(number1)

console.log(number2)

//mathematical operations
let sum = number1 + number2 +10
let sub = number2 - number1 -10
let mul = number1 * number2
let div = number2 / number1

let remainder = number2 % number1

console.log(sum, sub, mul, div, remainder)

//conditional operators && and || or
let price = 100

let ordered_before = true

let should_get_discount = price > 50 || !ordered_before

if(should_get_discount == true)
{
    console.log("You Get a Discount")
}

let message1 = "You got a discount of :"
let discount = 10
console.log(message1 + 10 + "%")

console.log(`You got a discount of : ${discount}%`)

//Array - Storing many objects' info
let mySkills = ["JavaScript", "PHP", "Python"]

//Object - value pairs - one info set
let mySkillsRating = {
    "JavaScript": 10,
    "PHP": 8,
    "Python": 6
}

let item = {
    name: "Laptop",
    price: "1000",
    stock: 10,
    specifications:{
        ram: "32GB",
        storage: "1TB"
    },
    available_colors: ['black', 'white', 'silver', 'gold']
}

let item2 = {
    name: "Mobile",
    price: "500",
    stock: 10,
    specifications:{
        ram: "32GB",
        storage: "1TB"
    },
    available_colors: ['black', 'white', 'silver', 'gold']
}

console.log(item.price, item.specifications.storage)

const cart = [item, item2]

function calculateTotal(){
    let total = 0
    for(let i = 0; i< cart.length; i++ ){
        total = total + cart[i].price
    }


}

function Homework1 (n){
    let rem1 = n % 3
    let rem2 = n % 5
    if(rem1 == 0 && rem2 == 0){
        console.log("FizzBuzz")
    }
    if(rem1 == 0 && rem2 != 0){
        console.log("Fizz")
    }
    if(rem2 == 0 && rem1 != 0){
        console.log("Buzz")
    }
    if(rem2 != 0 && rem1 != 0){
        console.log(n)
    }
}

Homework1(1)
Homework1(2)
Homework1(3)
Homework1(4)
Homework1(5)
Homework1(6)
Homework1(7)
Homework1(8)
Homework1(9)
Homework1(10)
Homework1(15)
