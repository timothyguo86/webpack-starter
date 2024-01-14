import sum from '../js/index'

describe('sum function', () => {
  it('adds two numbers correctly', () => {
    const a = 2
    const b = 3

    const result = sum(a, b)

    expect(result).toBe(5)
  })
})
