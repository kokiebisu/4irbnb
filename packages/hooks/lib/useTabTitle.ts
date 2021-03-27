import { useEffect } from 'react'

/**
 * Custom hook that modifies the tab title for the page
 * @param {string} title - Tab name you want to add
 */
export const useTabTitle: (title: string) => void = (title) => {
  useEffect(() => {
    document.title = title
  }, [])
}
