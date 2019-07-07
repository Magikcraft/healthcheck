import { Logger } from '@magikcraft/healthcheck/lib/log'
const http = require('http')

const log = Logger(__filename)

log('@magikcraft/healthcheck loaded!')

// Healthchecks.io
const DEFAULT_PERIOD = 15 * 60 * 1000 // 15 minutes
const HEALTHCHECKS_IO_ID = java.lang.System.getenv('HEALTHCHECKS_IO_ID')
const HEALTHCHECKS_IO_PERIOD =
	java.lang.System.getenv('HEALTHCHECKS_IO_PERIOD') || DEFAULT_PERIOD

if (HEALTHCHECKS_IO_ID) {
	const url = `https://hc-ping.com/${HEALTHCHECKS_IO_ID}`
	const get = () =>
		http.request({ method: 'GET', url }, (resCode: number, _: never) =>
			log(`Healthcheck response: ${resCode}`)
		)

	log(
		`Registering healthcheck for ${url} every ${HEALTHCHECKS_IO_PERIOD /
			60 /
			1000} minutes`
	)
	get()
	setInterval(get, HEALTHCHECKS_IO_PERIOD)
}
