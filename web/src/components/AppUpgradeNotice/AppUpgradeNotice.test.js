import { render } from '@redwoodjs/testing'

import AppUpgradeNotice from './AppUpgradeNotice'

describe('AppUpgradeNotice', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppUpgradeNotice />)
    }).not.toThrow()
  })
})
