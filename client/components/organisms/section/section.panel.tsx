import React from 'react';
import layout from '../../../styles/layout.module.scss';
import staysDetail from '../../../styles/staysDetail.module.scss';

interface Props {
  title: string;
  ratings: number;
  numberOfReviews: number;
  superhost: boolean;
  location: string;
  province: string;
  country: string;
}

export const PanelSection: React.FC<Props> = ({
  title = 'Title here',
  ratings = 5.0,
  numberOfReviews = 100,
  superhost = false,
  location = 'City',
  province = 'Province',
  country = 'Country',
}) => {
  return (
    <>
      <div style={{ width: '100%', padding: '15px 0' }}>
        <h3 style={{ fontSize: 32, color: 'gray' }}>{title}</h3>
        <div
          className={[layout['items-center'], layout['justify-between']].join(
            ' '
          )}>
          <div
            className={[layout['items-center'], layout['flex-wrap']].join(' ')}>
            <div>
              <svg
                style={{ fill: '#E61E4D', marginBottom: 1, height: 14 }}
                viewBox='0 0 37.286 37.287'>
                <g>
                  <path
                    d='M36.683,16.339l-7.567,7.377l1.786,10.417c0.128,0.75-0.182,1.509-0.797,1.957c-0.348,0.253-0.762,0.382-1.176,0.382
c-0.318,0-0.638-0.076-0.931-0.23l-9.355-4.918l-9.355,4.918c-0.674,0.355-1.49,0.295-2.107-0.15
c-0.615-0.448-0.924-1.206-0.795-1.957l1.787-10.417L0.604,16.34c-0.547-0.531-0.741-1.326-0.508-2.05
c0.236-0.724,0.861-1.251,1.615-1.361l10.459-1.521l4.68-9.478c0.335-0.684,1.031-1.116,1.792-1.116
c0.763,0,1.456,0.432,1.793,1.115l4.68,9.478l10.461,1.521c0.752,0.109,1.379,0.637,1.611,1.361
C37.425,15.013,37.226,15.808,36.683,16.339z'
                  />
                </g>
              </svg>
            </div>
            <p
              style={{
                paddingLeft: 4,
                color: 'gray',
                fontSize: 14,
                fontWeight: 300,
              }}
              className='pl-1 text-gray-650 text-sm'>
              {ratings} ({numberOfReviews})
            </p>
            {superhost && (
              <>
                <span style={{ color: 'gray' }}>&nbsp;·&nbsp;</span>
                <div>
                  <svg
                    style={{ fill: '#E61E4D', height: 14 }}
                    viewBox='0 0 511.999 511.999'>
                    <g clipRule='evenodd' fillRule='evenodd'>
                      <path d='m345.999 174.051v-52.052h-180v52.052c26.942-14.077 57.555-22.053 90-22.053s63.058 7.975 90 22.053z' />
                      <path d='m330.999 91.994v-76.994c0-8.284-6.716-15-15-15h-120c-8.284 0-15 6.716-15 15v76.994c-.033 0-.064.005-.097.005h150.193c-.032-.001-.064-.005-.096-.005z' />
                      <path d='m271.572 324.382-15.572-23.478-15.572 23.478c-1.993 3.005-5.003 5.192-8.478 6.16l-27.142 7.555 17.517 22.066c2.242 2.825 3.392 6.363 3.238 9.966l-1.201 28.147 26.398-9.841c1.689-.63 3.465-.945 5.239-.945s3.55.315 5.239.945l26.398 9.841-1.201-28.147c-.153-3.603.996-7.141 3.238-9.966l17.517-22.065-27.142-7.555c-3.474-.969-6.483-3.156-8.476-6.161z' />
                      <path d='m255.999 181.998c-90.879 0-165 74.121-165 165s74.121 165 165 165 165-74.121 165-165-74.121-165-165-165zm88.748 157.039-28.101 35.398 1.928 45.155c.215 5.023-2.103 9.82-6.17 12.775-2.6 1.889-5.693 2.865-8.817 2.865-1.765 0-3.538-.311-5.238-.945l-42.35-15.787-42.35 15.787c-4.707 1.755-9.987 1.036-14.056-1.92-4.067-2.955-6.385-7.752-6.17-12.775l1.928-45.155-28.101-35.398c-3.126-3.938-4.071-9.18-2.518-13.961s5.399-8.467 10.243-9.815l43.541-12.121 24.981-37.664c2.778-4.19 7.473-6.709 12.5-6.709s9.722 2.519 12.5 6.709l24.981 37.664 43.541 12.121c4.844 1.349 8.689 5.034 10.243 9.815s.611 10.023-2.515 13.961z' />
                    </g>
                  </svg>
                </div>
                <p
                  style={{
                    paddingLeft: 3,
                    color: 'gray',
                    fontSize: 14,
                    fontWeight: 300,
                  }}>
                  Superhost
                </p>
              </>
            )}
            <span style={{ color: 'gray' }}>&nbsp;·&nbsp;</span>
            <a style={{ fontSize: 14, color: 'gray' }} href=''>
              <u>
                {location}, {province}, {country}
              </u>
            </a>
          </div>
          <div className='hidden lg:inline-block flex items-start justify-start'>
            <div
              style={{ paddingRight: 6 }}
              className={[layout['items-center']].join(' ')}>
              <div
                style={{ paddingLeft: 6 }}
                className={[layout['items-center']].join(' ')}>
                <div>
                  <svg
                    style={{ fill: '#484848', height: 14 }}
                    viewBox='0 0 512 512.00578'>
                    <path d='m507.523438 148.890625-138.667969-144c-4.523438-4.691406-11.457031-6.164063-17.492188-3.734375-6.058593 2.453125-10.027343 8.320312-10.027343 14.847656v69.335938h-5.332032c-114.6875 0-208 93.3125-208 208v32c0 7.421875 5.226563 13.609375 12.457032 15.296875 1.175781.296875 2.347656.425781 3.519531.425781 6.039062 0 11.820312-3.542969 14.613281-9.109375 29.996094-60.011719 90.304688-97.28125 157.398438-97.28125h25.34375v69.332031c0 6.53125 3.96875 12.398438 10.027343 14.828125 5.996094 2.453125 12.96875.960938 17.492188-3.734375l138.667969-144c5.972656-6.207031 5.972656-15.976562 0-22.207031zm0 0' />
                    <path d='m448.003906 512.003906h-384c-35.285156 0-63.99999975-28.710937-63.99999975-64v-298.664062c0-35.285156 28.71484375-64 63.99999975-64h64c11.796875 0 21.332032 9.535156 21.332032 21.332031s-9.535157 21.332031-21.332032 21.332031h-64c-11.777344 0-21.335937 9.558594-21.335937 21.335938v298.664062c0 11.777344 9.558593 21.335938 21.335937 21.335938h384c11.773438 0 21.332032-9.558594 21.332032-21.335938v-170.664062c0-11.796875 9.535156-21.335938 21.332031-21.335938 11.800781 0 21.335937 9.539063 21.335937 21.335938v170.664062c0 35.289063-28.714844 64-64 64zm0 0' />
                  </svg>
                </div>
                <p style={{ paddingLeft: 6, fontSize: 14, color: 'gray' }}>
                  <u>Share</u>
                </p>
              </div>
              <div
                style={{ paddingLeft: 4 }}
                className={[layout['items-center']].join(' ')}>
                <div>
                  <svg
                    style={{ fill: '#484848', marginTop: 1, height: 14 }}
                    viewBox='0 0 512.001 512'>
                    <path d='m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0' />
                  </svg>
                </div>
                <u
                  style={{
                    paddingLeft: 5,
                    fontSize: 14,
                    color: 'gray',
                  }}>
                  Save
                </u>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={[layout['justify-content']].join(' ')}>
        <div>
          <div className={[layout['flex']].join(' ')} style={{ height: '50%' }}>
            <div
              style={{
                backgroundPosition: 'cover',
                borderRight: '4px solid white',
                position: 'relative',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                overflow: 'hidden',
                borderRadius: 5,
              }}
              className={[staysDetail['w__image']].join(' ')}>
              <img
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
              />
            </div>
            <div
              className={[staysDetail['hidden__panel']].join(' ')}
              style={{ position: 'relative', width: '50%' }}>
              <div
                style={{ width: '100%', height: '100%' }}
                className={[layout['flex'], layout['flex-wrap']].join(' ')}>
                <div
                  style={{
                    borderRadius: 5,
                    borderLeft: '4px solid white',
                    borderRight: '4px solid white',
                    borderBottom: '4px solid white',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '50%',
                  }}
                  className={[staysDetail['w__image']].join(' ')}>
                  <img
                    src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
                <div
                  style={{
                    borderRadius: 5,
                    borderLeft: '4px solid white',

                    borderBottom: '4px solid white',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '50%',
                  }}
                  className={[staysDetail['w__image']].join(' ')}>
                  <img
                    src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
                <div
                  style={{
                    borderRadius: 5,
                    borderLeft: '4px solid white',
                    borderTop: '4px solid white',
                    borderRight: '4px solid white',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '50%',
                  }}
                  className={[staysDetail['w__image']].join(' ')}>
                  <img
                    src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
                <div
                  style={{
                    borderRadius: 5,
                    borderLeft: '4px solid white',
                    borderTop: '4px solid white',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '50%',
                  }}
                  className={[staysDetail['w__image']].join(' ')}>
                  <img
                    src='https://a0.muscache.com/im/pictures/2ad05257-9bda-4dec-b39e-709d0442ee68.jpg?aki_policy=x_large'
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
