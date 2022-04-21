// ----- If-Else Statement ----- //
const hour = 14
let greeting

if (hour < 18) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}

const isDay = hour => hour < 18
const getGreeting = hour => isDay(hour) ? 'Good Day' : 'Good Evening'
const greetingFunc = getGreeting (hour)

// ----- If Statement ----- //

let Name = 'joel'
//imperative
if (Name != null) { Name = Name.toUpperCase()}

//functional
const toUpperCase = name != null && (string => string.toUpperCase ())

// ----- Sum Array and Reduce ----- //

const values = [1, 2, 3]

let sum = 0
//"of" makes x the object, "in" makes x the index
for (const x of values) { sum = sum + x}

const add = (x, y) => x + y
const sumFunc = values.reduce(add)

// ----- Filter Array ----- //

const values2 = [1, 2, 3, 4, 5]

let evens = []
for (const x of values2) {
  if (x % 2 === 0) {
    evens.push(x)
  }
}

const isEven = num => num % 2 === 0
const evensFunc = filter (isEven) (values)

// ----- if else if else ----- //

const fn = temp => {
    if (temp === 0) return 'water freezes at 0°C'
    else if (temp === 100) return 'water boils at 100°C'
    else return `nothing special happens at ${temp}°C`
 }

const fnFunc = cond([
    [0, 'water freezes at 0°C'],
    [100, 'water boils at 100°C'],
    [() => true, $`nothing special happens at ${0}°C`]
])

// ----- setting property in object ----- //

const obj = { one: 1 }
obj.two = 2

const newObj = { ...obj,two: 2 }

// ----- changing arrays ----- //

const arr = [1, 2, 3]
//imp
arr.push(4)
//func
const newArr = [...values, 4]
//other option
const arr2 = L.from([1, 2, 3])
const newArr2 = L.append(4, values)