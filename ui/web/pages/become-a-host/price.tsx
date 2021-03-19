import { useState } from 'react'
import Router from 'next/router'
import { Layout } from '@nextbnb/layout'
import { Prototype, $PROTOTYPE } from '@nextbnb/prototype/dist/bundle.esm'
import { useStayDispatch, useStayState } from '@context/stay'

const PricePage = () => {
  const stayDispatch = useStayDispatch()
  const { basePrice, currency } = useStayState()
  const [data, setData] = useState({
    basePrice,
    currency
  })

  const proceed = () => {
    stayDispatch({
      type: 'add',
      payload: data
    })
    setTimeout(() => {
      Router.push('/become-a-host/booking-scenarios')
    }, 500)
  }

  const revert = () => {
    setTimeout(() => {
      Router.push('/period')
    }, 500)
  }

  return (
    <Layout
      variant="create"
      title="Pricing"
      left={
        <Prototype variant={$PROTOTYPE.price} data={data} setData={setData} />
      }
      percentage={90}
      next={proceed}
      back={revert}
    />
  )
}

export default PricePage
