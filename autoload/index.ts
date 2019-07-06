import { Logger } from '@magikcraft/healthcheck/lib/log'
import http from 'http'

const log = Logger(__filename)

log('@magikcraft/healthcheck loaded!')

// Healthchecks.io
const DEFAULT_PERIOD = 15 * 60 * 1000 // 15 minutes
const HEALTHCHECKS_IO_URL = java.lang.System.getenv('HEALTHCHECKS_IO_URL')
const HEALTHCHECKS_IO_PERIOD =
	java.lang.System.getenv('HEALTHCHECKS_IO_PERIOD') || DEFAULT_PERIOD

if (HEALTHCHECKS_IO_URL) {
	log(`Registering healthcheck for ${HEALTHCHECKS_IO_URL}`)
	setInterval(() => http.get(HEALTHCHECKS_IO_URL), HEALTHCHECKS_IO_PERIOD)
}
