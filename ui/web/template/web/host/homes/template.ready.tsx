/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Router from 'next/router'
import { Button, $BUTTON } from '@nextbnb/atoms/dist/bundle.esm'

/**
 * Renders the ready section
 */
export const ReadyTemplate: React.FC<{}> = () => {
  return (
    <div
      css={{
        display: 'flex'
      }}
    >
      <div
        css={{
          width: '50%'
        }}
      >
        <h1
          css={{
            fontSize: 40
          }}
        >
          Ready to host?
        </h1>
      </div>
      <div
        css={{
          width: '50%'
        }}
      >
        <div
          css={{
            marginBottom: 32
          }}
        >
          <h4
            css={{
              fontSize: 20
            }}
          >
            Create a listing that fits your hosting style—we'll give you tips to
            make your place shine. Start now and finish any time.
          </h4>
        </div>
        <div
          css={{
            display: 'inline-block'
          }}
        >
          <Button
            variant={$BUTTON.primary}
            size="md"
            title="Get started"
            onClick={() => Router.push('/become-a-host')}
          />
        </div>
      </div>
    </div>
  )
}
