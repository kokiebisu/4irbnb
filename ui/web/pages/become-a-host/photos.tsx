import { useState } from 'react'
import Router from 'next/router'
import { useStayDispatch, useStayState } from '@context/stay'
import { Layout } from '@nextbnb/layout'
import { Prototype, $PROTOTYPE } from '@nextbnb/prototype/dist/bundle.esm'

const PhotosPage = () => {
  const stayDispatch = useStayDispatch()
  const { photos } = useStayState()
  const [data, setData] = useState({
    photos
  })

  const proceed = () => {
    stayDispatch({
      type: 'add',
      payload: data
    })
    setTimeout(() => {
      Router.push('/become-a-host/description')
    }, 500)
  }

  const revert = () => {
    setTimeout(() => {
      Router.push('/become-a-host/spaces')
    }, 500)
  }

  return (
    <Layout
      variant="create"
      title="Photos"
      left={
        <Prototype variant={$PROTOTYPE.photos} data={data} setData={setData} />
      }
      percentage={35}
      next={proceed}
      back={revert}
    />
  )
}

export default PhotosPage
