import { useLayoutEffect, useState } from 'react'

export const useHandleContainerResize: (ref: any) => any = (ref) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleRef = () => {
    if (ref.current && ref.current.getBoundingClientRect()) {
      setWidth(ref.current.getBoundingClientRect().width)
      setHeight(ref.current.getBoundingClientRect().height)
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', handleRef)
    handleRef()
    return () => {
      window.removeEventListener('resize', handleRef)
    }
  })

  return [width, height]
}
