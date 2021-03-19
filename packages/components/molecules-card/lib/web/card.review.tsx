/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { renderDescription } from '../logic/logic.review';
import { $CARD } from '../constant/appearance';

/**
 * Renders the review card component
 * @param {string} imgUrl - Image of the review card
 * @param {string} description - Description of the review card
 */
const ReviewCard: React.FC<{
  imgUrl?: string;
  description?: string;
  commentedDate?: string;
  user?: string;
}> = ({
  imgUrl,
  user = 'User',
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  commentedDate = 'Month, Year',
}) => {
  const [display, setDisplay] = useState(false);

  return (
    <div css={{ padding: '12px 0' }}>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          paddingBottom: 8,
        }}
      >
        <div css={{ height: 55, width: 55, borderRadius: 9999 }}>
          {imgUrl ? (
            <img src={imgUrl} css={{ borderRadius: 9999 }} />
          ) : (
            <div
              css={{
                width: '100%',
                height: '100%',
                borderRadius: 9999,
              }}
              sx={{ bg: 'grey.300' }}
            />
          )}
        </div>
        <div
          css={{
            marginLeft: 12,
            paddingBottom: 8,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div css={{ display: 'flex', flexDirection: 'column' }}>
            <p sx={{ color: 'grey.800' }}>{user}</p>
            <p
              css={{ fontSize: 14, fontWeight: 300 }}
              sx={{ color: 'grey.600' }}
            >
              {commentedDate}
            </p>
          </div>
        </div>
      </div>
      <div css={{ margin: '12px 0' }}>
        {display || description.split(' ').length < 75 ? (
          <p css={{ fontWeight: 100, lineHeight: 1.5 }}>{description}</p>
        ) : (
          <p css={{ fontWeight: 100, lineHeight: 1.5 }}>
            {renderDescription(description)}
            <span
              css={{
                display: 'inline-block',
                marginLeft: 6,
              }}
            >
              <div
                sx={{
                  bg: 'transparent',
                }}
                css={{ fontSize: 16 }}
                onClick={() => setDisplay(!display)}
              >
                <u>read more</u>
              </div>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export const review = (props) => {
  return {
    [$CARD.review]: {
      component: <ReviewCard {...props} />,
      css: {},
    },
  };
};
