import _ from 'lodash'
import sum from '../js/index'

// Mocking console.log
global.console.log = jest.fn()

// Importing the code
import '../styles/main.scss'

test('prints the expected output to the console', () => {
  // Call the code that logs to console
  console.log(_.join(['Hello', 'World!'], ' '))

  // Assert that console.log was called with the expected argument
  expect(global.console.log).toHaveBeenCalledWith('Hello World!')
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
