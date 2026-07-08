import {
  createInstance,
  createStaticProjectConfigManager,
  createBatchEventProcessor,
} from '@optimizely/react-sdk'

// Rituals demo — Optimizely Feature Experimentation client
// Project: Rituals FX (5958859641061376), Production environment
export const SDK_KEY = 'UkSTjsgrEmaJvBGBQmhji'
const DATAFILE_URL = `https://cdn.optimizely.com/datafiles/${SDK_KEY}.json`

// The CDN sets cache-control: max-age=120. We bust the cache on every poll
// and rebuild the client only when the revision changes, for near-instant
// demo feedback without spamming Optimizely.
const POLL_MS = 5000

let currentClient = null
let currentRevision = null
const listeners = new Set()

async function fetchDatafile() {
  const res = await fetch(`${DATAFILE_URL}?cb=${Date.now()}`, { cache: 'no-store' })
  if (!res.ok) throw new Error(`datafile fetch failed: ${res.status}`)
  return res.json()
}

async function refresh() {
  try {
    const datafile = await fetchDatafile()
    if (datafile.revision === currentRevision) return
    currentRevision = datafile.revision
    const client = createInstance({
      projectConfigManager: createStaticProjectConfigManager({ datafile }),
      eventProcessor: createBatchEventProcessor(),
    })
    await client.onReady()
    currentClient = client
    listeners.forEach((fn) => fn())
  } catch {
    // keep the previous client on transient fetch errors
  }
}

if (typeof window !== 'undefined') {
  refresh()
  setInterval(refresh, POLL_MS)
}

export function getClient() {
  return currentClient
}

export function onClientUpdate(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

// Stable anonymous visitor id — bucketing is sticky per browser session.
export function getVisitorId() {
  const KEY = 'rituals_visitor_id'
  let id = localStorage.getItem(KEY)
  if (!id) {
    id = 'visitor_' + Math.random().toString(36).slice(2, 12)
    localStorage.setItem(KEY, id)
  }
  return id
}
