let myName = 'Tim'

const hello = name => console.log(`Hello ${name}`)

hello(myName)

const q1 = ['Jan', 'Feb', 'Mar']
const q2 = ['Apr', 'May', 'Jun']
const q3 = ['Jul', 'Aug', 'Sep']
const q4 = ['Oct', 'Nov', 'May']

const year = [...q1, ...q2, ...q3, ...q4]

console.log(year)

const cars = ['BMW', 'Volvo', 'Mini']
let text = ''

for (let x of cars) {
  text += x + ' '
}

console.log(text)
