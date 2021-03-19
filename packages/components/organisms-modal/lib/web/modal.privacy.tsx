/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm'
import { Lock } from '@nextbnb/assets/svg/original'
import { $MODAL } from '../constant/appearance'

/**
 * Renders the privacy modal
 * @param {function} togglePrivacy - Dispatch which handles the toggle of the modal
 */
const PrivacyModal: React.FC<{ togglePrivacy: () => void }> = ({
  togglePrivacy
}) => {
  // const toggleDispatch = useToggleDispatch();

  const handleSave = () => {
    // add cookie
    return togglePrivacy()
  }

  const handleSettings = () => {
    // open settings
    return togglePrivacy()
  }

  return (
    <div>
      <div
        css={{
          padding: 18,
          borderRadius: 8
        }}
        sx={{
          alignItems: 'center',
          display: ['block', 'block', 'block', 'block', 'flex']
        }}
      >
        <div>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              margin: '6px 0'
            }}
          >
            <div css={{ marginRight: 10 }}>Your Privacy</div>
            <div>
              <Lock width={16} fill="#428BFF" />
            </div>
          </div>
          <div css={{ marginBottom: 30 }}>
            <p
              css={{ fontSize: 14, fontWeight: 300, lineHeight: 1.5 }}
              sx={{
                color: 'grey.500'
              }}
            >
              We use cookies to help personalize content, tailor and measure
              ads, and provide a safer experience. By navigating the site, you
              agree to the use of cookies to collect information on and off
              Airbnb. Read our{' '}
              <u>
                <b>Cookie Policy</b>
              </u>{' '}
              to learn more or go to Cookie Preferences to manage your settings.
            </p>
          </div>
        </div>
        <div
          css={{
            display: ['block', 'flex']
          }}
        >
          <div
            css={{
              marginTop: 6,
              marginBottom: 6,
              marginLeft: 0,
              marginRight: ['0', '8px']
            }}
          >
            <Button
              variant={$BUTTON.privacy}
              extendsTo={{
                width: '100%',
                display: ['block', 'flex'],
                textAlign: 'center'
              }}
              title="Save"
              onClick={handleSave}
            />
          </div>
          <div
            css={{
              margin: '6px 0'
            }}
          >
            <Button
              variant={$BUTTON.privacy}
              css={{
                width: '100%',
                display: ['block', 'flex'],
                textAlign: 'center'
              }}
              title="Cookie Preferences"
              inverse
              onClick={handleSettings}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const privacy = (props) => {
  return {
    [$MODAL.privacy]: {
      component: <PrivacyModal {...props} />,
      css: {
        width: [
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          '100%'
        ],
        maxWidth: [
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          'auto',
          '1600px'
        ],
        borderRadius: 8,
        padding: 25
      }
    }
  }
}
