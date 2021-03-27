/** @jsxRuntime classic */
/** @jsx jsx */
import { AnimatePresence, motion } from 'framer-motion'
import { useToggleState } from '../context/toggle'
import {
  categoryItems,
  anywhereItems,
  destinationItems
} from '@nextbnb/content'
import { nearbyItems } from '../data/nearby'
import { Layout } from '@nextbnb/layout'
import { Animation } from '@nextbnb/animation'
import {
  Modal,
  $MODAL,
  Bar,
  $BAR,
  Footer
} from '@nextbnb/organisms/dist/bundle.cjs'
import {
  useHandleDocumentResize,
  useTimeout,
  useTabTitle,
  useHandleScroll
} from '@nextbnb/hooks/dist/bundle.esm'

import { APIClient } from '../api/client'
import React from 'react'
import { jsx } from 'theme-ui'
import { $Template, Template } from 'template/web/index'

const LandingPage = ({ currentUser }) => {
  useTabTitle('Vacation Rentals, Homes, Experiences & Places - Airbnb')
  const loading = useTimeout(3000)
  const toggleState = useToggleState()
  const scrollPosition = useHandleScroll()
  const pageHeight = useHandleDocumentResize()

  return (
    <div sx={{ overflowX: 'hidden', position: 'relative', minHeight: '100vh' }}>
      <div>
        <div>
          <Bar variant={$BAR.covid} />
        </div>
        <Template variant="banner" data={currentUser || null} />
        {loading ? (
          <>
            <Layout variant="landing" spread>
              <Template variant={$Template.NEARBY} items={nearbyItems} />
            </Layout>
            <Layout variant="landing" title="Live anywhere" spread>
              <Template variant={$Template.ANYWHERE} items={anywhereItems} />
            </Layout>
            <div sx={{ margin: '32px 0' }}></div>
            <Layout
              dark
              spread
              variant="landing"
              title="Meet Online Experiences"
              subtitle="Interactive activities you can do together, led by expert hosts."
            >
              <Template variant={$Template.ONLINE} sectionType="landing" dark />
            </Layout>
            <Layout
              variant="landing"
              spread
              title="Join millions of hosts on Airbnb"
            >
              <Template variant={$Template.CATEGORY} items={categoryItems} />
            </Layout>
            <Layout
              variant="landing"
              spread
              title="Inspiration for future getaways"
            >
              <Template
                variant={$Template.DESTINATIONS}
                items={destinationItems}
              />
            </Layout>
          </>
        ) : (
          <div
            sx={{
              margin: '22px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Animation type="loading" dark />
          </div>
        )}
        <Footer spread />
        <div
          sx={{
            position: 'fixed',
            width: '100%',
            zIndex: 50,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div sx={{ margin: '32px 0' }}>
            <Modal
              variant={$MODAL.privacy}
              criteria={toggleState.privacy}
              animate="slideup"
            />
          </div>
        </div>

        <AnimatePresence>
          {scrollPosition < pageHeight && (
            <motion.div
              animate={{ y: 0 }}
              exit={{ y: 60 }}
              initial={{ y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ display: 'block' }}
            >
              <div
                sx={{
                  borderTop: 'gray.100',
                  display: 'fixed',
                  width: '100%',
                  zIndex: 30,
                  bottom: 0
                }}
              >
                <Bar variant={$BAR.menu} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {toggleState.auth && (
          <div
            sx={{
              position: 'fixed',
              zIndex: 60,
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }}
          >
            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
              }}
            >
              <Modal
                variant={$MODAL.auth}
                animate="slideup"
                criteria={toggleState.auth}
                lock
              />
            </div>
          </div>
        )}
        {toggleState.globe && (
          <div
            sx={{
              position: 'fixed',
              zIndex: 60,
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }}
          >
            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
              }}
            >
              <Modal
                variant={$MODAL.globe}
                animate="slideup"
                criteria={toggleState.globe}
                lock
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

LandingPage.getInitialProps = async (context) => {
  const client = APIClient(context)
  try {
    const response = await client.get('/api/users/currentuser')
    return response.data
  } catch (err) {
    return {}
  }
}

export default LandingPage
