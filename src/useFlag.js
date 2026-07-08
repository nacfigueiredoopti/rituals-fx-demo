import { useEffect, useState } from 'react'
import { getClient, onClientUpdate, getVisitorId } from './optimizely.js'

// Re-evaluates the flag whenever the client is rebuilt with a fresh datafile.
// decide() is a cheap local call, so this stays in sync within the poll interval.
export function useFlag(flagKey) {
  const [state, setState] = useState({ ready: false, decision: null })

  useEffect(() => {
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
