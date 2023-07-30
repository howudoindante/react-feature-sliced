import { squareValue } from './numbers'

describe('Squared function works correctly', () => {
  test('Squared 2 equals 4', () => {
    expect(squareValue(2)).toBe(4)
  })

  test('Squared 0 equals 0', () => {
    expect(squareValue(0)).toBe(0)
  })
}
)
