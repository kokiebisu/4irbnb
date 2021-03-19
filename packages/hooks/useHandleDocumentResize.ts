import { useState, useEffect } from 'react'

/**
 * A custom hook to calculate the height of the document
 */
export const useHandleDocumentResize: () => number = () => {
  const [pageHeight, setPageHeight] = useState(0)

  const handleResize = () => {
    const height = document.body.scrollHeight - document.body.clientHeight
    setPageHeight(height)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true })
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return pageHeight
}
