import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import AppUpgradeNotice from 'src/components/AppUpgradeNotice'

const AppLayout = ({ children }) => {
  const [version, setVersion] = useState(process.env.APP_VERSION)
  console.info(`process.env.APP_VERSION: ${process.env.APP_VERSION}`)

  return (
    <>
      <AppUpgradeNotice forceVersion={version} />
      <main className="max-w-screen-md mx-auto py-12">
        <div className="w-full text-right">
          <button
            type="button"
            className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => {
              setVersion(new Date().toISOString().replace(/[:\-T.Z]/g, ''))
            }}
          >
            Increment Version
          </button>
          <div className="mt-1 text-xs text-gray-400">Current: {version}</div>
        </div>
        <nav className="flex items-center justify-left">
          <Link to={routes.home()} className="underline mx-1">
            Home
          </Link>
          <Link to={routes.other()} className="underline mx-1">
            Other
          </Link>
        </nav>
        {children}
      </main>
    </>
  )
}

export default AppLayout
