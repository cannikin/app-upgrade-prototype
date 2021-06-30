import { logger } from 'src/lib/logger'

export const handler = async (event, _context) => {
  logger.info('appVersionCheck...')
  const body = { version: null }

  // first check for ENV var
  if (process.env.APP_VERSION) {
    body.version = process.env.APP_VERSION
  }

  // finally, if there is a version in the query string, it should override all else
  if (
    event.queryStringParameters.version &&
    event.queryStringParameters.version !== 'null' &&
    event.queryStringParameters.version !== 'undefined'
  ) {
    body.version = event.queryStringParameters.version
  }

  logger.info(`  Found version ${body.version}`)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
}
