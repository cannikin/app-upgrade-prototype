import { useState } from 'react'
import { useInterval } from 'src/lib/hooks'

const AppUpgradeNotice = ({ forceVersion }) => {
  const [version, setVersion] = useState(forceVersion)
  const [showNotification, setShowNotification] = useState(false)

  // set an interval to check for latest version, unless we're already showing
  // then notification, then cancel interval
  useInterval(
    async () => {
      const response = await fetch(
        `/.redwood/functions/appVersionCheck?version=${forceVersion}`
      )
      const data = await response.json()

      if (version === null) {
        setVersion(data.version)
      } else if (version !== data.version) {
        setShowNotification(true)
      }
      console.info(`version: ${version}`)
    },
    showNotification ? null : 5000
  )

  if (showNotification) {
    return (
      <div className="absolute top-0 left-0 right-0 p-2 bg-red-700 text-white ">
        <div className="flex items-center justify-center text-sm">
          <span>New code is live,</span>
          <button
            type="button"
            className="ml-1 underline"
            onClick={() => location.reload()}
          >
            reload to see changes!
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default AppUpgradeNotice
