import { render } from '@redwoodjs/testing'

import OtherPage from './OtherPage'

describe('OtherPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OtherPage />)
    }).not.toThrow()
  })
})
