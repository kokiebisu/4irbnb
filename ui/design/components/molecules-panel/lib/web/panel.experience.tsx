/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { $PANEL } from '..';

const ExperiencePanel: React.FC<{ images?: string[] }> = ({ images = [] }) => {
  return (
    <div
      css={{
        paddingTop: '38%',
        height: 0,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        <div
          css={{
            height: '100%',
            display: 'grid',
            gridGap: 10,
            gridTemplateColumns: '1fr 1.5fr 1fr',
          }}
        >
          <div
            css={{
              backgroundSize: 'cover',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              ...(images[0] && { backgroundImage: `url(${images[0]})` }),
            }}
            sx={{
              ...(!images[0] && { backgroundColor: 'lightgray' }),
            }}
          />
          <div
            css={{
              display: 'grid',
              height: '100%',
              gridGap: 10,
              gridTemplateColumns: '2fr 1fr',
              gridTemplateRows: 'auto auto',
            }}
          >
            <div
              css={{
                backgroundSize: 'cover',
                gridColumnStart: 1,
                gridColumnEnd: 2,
                gridRowStart: 1,
                gridRowEnd: 3,
                ...(images[1] && { backgroundImage: `url(${images[1]})` }),
              }}
              sx={{
                ...(!images[1] && { backgroundColor: 'lightgray' }),
              }}
            />
            <div
              css={{
                backgroundSize: 'cover',
                backgroundImage: images[2] && `url(${images[2]})`,
                gridColumnStart: 2,
                gridColumnEnd: 3,
                gridRowStart: 1,
                gridRowEnd: 2,
                ...(images[2] && { backgroundImage: `url(${images[2]})` }),
              }}
              sx={{
                ...(!images[2] && { backgroundColor: 'lightgray' }),
              }}
            />
            <div
              css={{
                backgroundSize: 'cover',
                backgroundImage: images[3] && `url(${images[3]})`,
                gridColumnStart: 2,
                gridColumnEnd: 3,
                gridRowStart: 2,
                gridRowEnd: 3,
                ...(images[2] && { backgroundImage: `url(${images[2]})` }),
              }}
              sx={{
                ...(!images[2] && { backgroundColor: 'lightgray' }),
              }}
            />
          </div>
          <div
            css={{
              backgroundSize: 'cover',
              backgroundImage: images[3] && `url(${images[3]})`,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              ...(images[2] && { backgroundImage: `url(${images[2]})` }),
            }}
            sx={{
              ...(!images[2] && { backgroundColor: 'lightgray' }),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const experience = (props) => {
  return {
    [$PANEL.experience]: {
      component: <ExperiencePanel {...props} />,
      css: {},
    },
  };
};
