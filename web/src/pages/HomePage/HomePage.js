const HomePage = () => {
  return (
    <div className="max-w-screen-md bg-white rounded-lg shadow p-12">
      <h1 className="text-3xl font-semibold text-center">
        App Reload Prototype
      </h1>
      <p className="mt-4 text-center">
        This is prototyping a feature to notify users when a new version of the
        app has been deployed and prompts them to reload to get the latest
        content.
      </p>
      <h2 className="mt-12 font-semibold text-xl text-center">
        Triggering a Notification
      </h2>

      <ol className="mt-4 list-decimal">
        <li>
          Update an <code className="text-sm text-gray-700">APP_VERSION</code>{' '}
          environment variable, or
        </li>
        <li className="mt-2">
          [TODO] Add a <code className="text-sm text-gray-700">VERSION</code>{' '}
          file in the root of the app, containing the version in text, otherwise
        </li>
        <li className="mt-2">
          [TODO] Redwood will run{' '}
          <code className="text-sm text-gray-700">git rev-parse HEAD</code>
          to retrieve the latest commit hash
        </li>
        <li className="mt-2">
          [TODO] If all else fails, generate a hash based on the contents of the
          entire directory structure—any change to any file will trigger a
          notification
        </li>
      </ol>
    </div>
  )
}

export default HomePage
