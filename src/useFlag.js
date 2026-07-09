import { useEffect, useState } from 'react'
import { getClient, onClientUpdate, getVisitorId, edgeDecisions } from './optimizely.js'

// Re-evaluates the flag whenever the client is rebuilt with a fresh datafile.
// decide() is a cheap local call, so this stays in sync within the poll interval.
//
// When served through the Fastly worker, decisions were already made at the
// edge (with the edge visitor id) and rendered into the HTML. They are
// authoritative: re-deciding here would flicker from the fallback defaults
// and could land a different variation than the edge banner claims.
export function useFlag(flagKey) {
  const [state, setState] = useState(() => {
    const edge = edgeDecisions?.[flagKey]
    return edge ? { ready: true, decision: edge } : { ready: false, decision: null }
  })

  useEffect(() => {
    if (edgeDecisions?.[flagKey]) return undefined

    const evaluate = () => {
      const client = getClient()
      if (!client) return
      try {
        const decision = client.createUserContext(getVisitorId()).decide(flagKey)
        setState({ ready: true, decision })
      } catch {
        /* keep last good state */
      }
    }

    evaluate()
    const unsub = onClientUpdate(evaluate)
    return unsub
  }, [flagKey])

  return state
}
