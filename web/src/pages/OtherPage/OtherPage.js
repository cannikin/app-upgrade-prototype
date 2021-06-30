import { Link, routes } from '@redwoodjs/router'

const OtherPage = () => {
  return (
    <div className="max-w-screen-md bg-white rounded-lg shadow p-12">
      <h1 className="text-3xl font-semibold text-center">Other Page</h1>
      <p className="mt-4 text-center">
        Just another page to show that the interval is still running (since it's
        in the layout, which wraps both of these pages).
      </p>
    </div>
  )
}

export default OtherPage
