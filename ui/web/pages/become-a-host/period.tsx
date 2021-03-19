import { useState } from 'react'
import Router from 'next/router'
import { Layout } from '@nextbnb/layout'
import { Prototype, $PROTOTYPE } from '@nextbnb/prototype/dist/bundle.esm'
import { useStayDispatch, useStayState } from '@context/stay'

const PeriodPage = () => {
  const stayDispatch = useStayDispatch()
  const { min, max } = useStayState()
  const [data, setData] = useState({
    min,
    max
  })

  const proceed = () => {
    stayDispatch({
      type: 'add',
      payload: data
    })
    setTimeout(() => {
      Router.push('/become-a-host/price')
    }, 500)
  }

  const revert = () => {
    setTimeout(() => {
      Router.push('/advance')
    }, 500)
  }

  return (
    <Layout
      variant="create"
      title="Calendar and availability"
      left={
        <Prototype variant={$PROTOTYPE.period} data={data} setData={setData} />
      }
      percentage={90}
      next={proceed}
      back={revert}
      criteria={data.min === 0 || data.max === 0}
    />
  )
}

export default PeriodPage
