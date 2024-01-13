import './main.scss'

let myName = 'Tim Guo'

const hello = name => {
  return `Hello ${name}`
}

const q1 = ['Jan', 'Feb', 'Mar']
const q2 = ['Apr', 'May', 'Jun']
const q3 = ['Jul', 'Aug', 'Sep']
const q4 = ['Oct', 'Nov', 'Dec']

const year = [...q1, ...q2, ...q3, ...q4]

console.log(year)

const h1 = document.createElement('h1')
const p = document.createElement('p')

h1.innerText = `${hello(myName)}`
p.innerText = `${year}`
p.classList.add('example')

document.querySelector('body').appendChild(h1)
document.querySelector('body').appendChild(p)
