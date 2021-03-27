import { useState, useEffect } from 'react'

/**
 * Simulates the loading time (for fetching)
 * @param {number} time - Number of milliseconds in which it timesout
 */
export const useTimeout: (time: number) => boolean = (time) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, time)
  }, [])
  return loading
}
