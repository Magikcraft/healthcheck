import { Logger } from '@magikcraft/healthcheck/lib/log'
import http from 'http'

const log = Logger(__filename)

log('@magikcraft/healthcheck loaded!')

// Healthchecks.io
const DEFAULT_PERIOD = 15 * 60 * 1000 // 15 minutes
const HEALTHCHECKS_IO_ID = java.lang.System.getenv('HEALTHCHECKS_IO_ID')
const HEALTHCHECKS_IO_PERIOD =
	java.lang.System.getenv('HEALTHCHECKS_IO_PERIOD') || DEFAULT_PERIOD

log(`${{ HEALTHCHECKS_IO_ID }}`)

if (HEALTHCHECKS_IO_ID) {
	const url = `https://hc-ping.com/${HEALTHCHECKS_IO_ID}`
	log(`Registering healthcheck for ${url}`)
	http.get(url)
	setInterval(() => http.get(url), HEALTHCHECKS_IO_PERIOD)
}
