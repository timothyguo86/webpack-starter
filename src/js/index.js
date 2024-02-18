import '../styles/main.scss'

const helloWorld = document.createElement('h2')
helloWorld.textContent = 'Hello World'
document.body.appendChild(helloWorld)

const sum = (a, b) => a + b

console.log('sum::: ', sum(1, 2)) // eslint-disable-line no-console

export default sum
