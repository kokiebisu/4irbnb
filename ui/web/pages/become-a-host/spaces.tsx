import { useState } from 'react'
import Router from 'next/router'

import { Layout } from '@nextbnb/layout'
import { Prototype, $PROTOTYPE } from '@nextbnb/prototype/dist/bundle.esm'
import { useStayDispatch, useStayState } from '@context/stay'

const AmenitiesPage = () => {
  const stayDispatch = useStayDispatch()
  const { spaces } = useStayState()
  const [data, setData] = useState({
    spaces
  })

  const proceed = () => {
    stayDispatch({
      type: 'add',
      payload: data
    })
    setTimeout(() => {
      Router.push('/become-a-host/photos')
    }, 500)
  }

  const revert = () => {
    setTimeout(() => {
      Router.push('/become-a-host/amenities')
    }, 500)
  }

  return (
    <Layout
      variant="create"
      left={
        <Prototype
          title="Amenities"
          variant={$PROTOTYPE.spaces}
          data={data}
          setData={setData}
        />
      }
      percentage={30}
      next={proceed}
      back={revert}
    />
  )
}

export default AmenitiesPage
