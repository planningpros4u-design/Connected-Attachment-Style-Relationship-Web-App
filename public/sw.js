// Connected App — Service Worker
// Provides offline support and caching for a PWA experience

const CACHE_NAME = 'connected-app-v1'
const STATIC_CACHE_NAME = 'connected-static-v1'

// Files to cache immediately on install
const PRECACHE_URLS = [
  '/',
  '/static/app.js',
  '/static/style.css',
  '/static/favicon.svg',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
]

// External resources to cache when first fetched
const EXTERNAL_CACHE_URLS = [
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Satisfy&display=swap',
]

// ---- Install: Pre-cache core assets ----
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS)
    }).then(() => {
      return self.skipWaiting()
    }).catch((err) => {
      // Don't block install if some assets fail
      console.warn('SW: Pre-cache partial failure:', err)
      return self.skipWaiting()
    })
  )
})

// ---- Activate: Clean up old caches ----
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== STATIC_CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    }).then(() => {
      return self.clients.claim()
    })
  )
})

// ---- Fetch: Network-first for HTML, Cache-first for static assets ----
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip chrome-extension and other non-http requests
  if (!request.url.startsWith('http')) return

  // For navigation (HTML pages): network-first, fall back to cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        })
        .catch(() => {
          return caches.match(request).then((cached) => {
            return cached || caches.match('/')
          })
        })
    )
    return
  }

  // For static assets (/static/*): cache-first, fall back to network
  if (url.pathname.startsWith('/static/') || url.pathname.startsWith('/icon') || url.pathname === '/manifest.json') {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached
        return fetch(request).then((response) => {
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(STATIC_CACHE_NAME).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        }).catch(() => cached)
      })
    )
    return
  }

  // For Google Fonts and other external: cache-first
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached
        return fetch(request).then((response) => {
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(STATIC_CACHE_NAME).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        }).catch(() => cached)
      })
    )
    return
  }
})
