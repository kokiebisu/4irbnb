import color from '@styles/color.module.scss';
import font from '@styles/font.module.scss';
import layout from '@styles/layout.module.scss';
import shape from '@styles/shape.module.scss';
import space from '@styles/space.module.scss';
import section from '@template/index.module.scss';

import { Button, $Button } from '@button';

export interface MoreTemplateProps {
  imgUrl?: string;
}

export const MoreTemplate: React.FC<MoreTemplateProps> = ({ imgUrl }) => {
  return (
    <div>
      <div style={{ height: 0, paddingTop: '50%', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: imgUrl && `url(${imgUrl})`,
            backgroundColor: !imgUrl && 'lightgray',
          }}
        >
          <div
            className={[
              layout['flex'],
              layout['items-center'],
              layout['justify-center'],
              shape['h--full'],
            ].join(' ')}
          >
            <div>
              <div className={[section['w__more--title']].join(' ')}>
                <h2
                  className={[
                    font['lh--10'],
                    font['text--center'],
                    color['c--white'],
                    section['font__more--title'],
                  ].join(' ')}
                >
                  Learn more about hosting with Airbnb Experiences
                </h2>
              </div>
              <div
                className={[
                  space['m-t--32'],
                  layout['flex'],
                  layout['justify-center'],
                ].join(' ')}
              >
                <Button
                  variant={$Button.BORDER}
                  title="Let's go"
                  inverse
                  bold
                  size="md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};