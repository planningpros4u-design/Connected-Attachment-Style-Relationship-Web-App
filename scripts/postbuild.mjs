// Post-build script: update _routes.json to exclude PWA static files
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const routesPath = resolve(__dirname, '../dist/_routes.json')

const routes = {
  version: 1,
  include: ['/*'],
  exclude: [
    '/static/*',
    '/manifest.json',
    '/sw.js',
    '/icon-192.png',
    '/icon-512.png',
    '/icon-192.svg',
    '/favicon.svg',
  ]
}

writeFileSync(routesPath, JSON.stringify(routes, null, 2))
console.log('Updated _routes.json with PWA file exclusions')
