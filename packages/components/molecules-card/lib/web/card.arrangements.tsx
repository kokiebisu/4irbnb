/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { DoubleBed } from '@nextbnb/assets/svg/original'
import { $CARD } from '../constant/appearance'

/**
 * Renders the arrangements card component
 * @param {Object} card - Information of the card
 */
const ArrangementsCard: React.FC<{ card?: any }> = ({
  card = {
    type: 'Bedroom',
    beds: [{ type: 'double bed', count: 1 }]
  }
}) => {
  return (
    <div
      css={{
        padding: '25px 0',
        border: '1px solid',
        borderRadius: 15,
        width: 200
      }}
      sx={{ borderColor: 'grey.300' }}
    >
      <div css={{ paddingLeft: 14 }}>
        <div css={{ paddingTop: 4, paddingBottom: 8 }}>
          <DoubleBed width={24} />
        </div>
        <p css={{ paddingTop: 4 }} sx={{ color: 'grey.700' }}>
          Bedroom
        </p>
        <div>
          {card.beds.map(
            (bed: { count: number; type: string }, index: number) => {
              return (
                <p key={index} sx={{ color: 'grey.700' }}>
                  {bed.count} {bed.type}
                </p>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

export const arrangements = (props) => {
  return {
    [$CARD.arrangements]: {
      component: <ArrangementsCard {...props} />,
      css: {}
    }
  }
}
