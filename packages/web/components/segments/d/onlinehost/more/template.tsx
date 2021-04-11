import section from '@template/index.module.scss';

import { Button } from '@button';

export interface MoreTemplateProps {
  imgUrl?: string;
}

export const MoreTemplate: React.FC<MoreTemplateProps> = ({ imgUrl }) => {
  return (
    <div>
      <div className="relative h-0" style={{ paddingTop: '50%' }}>
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center"
          style={{
            backgroundImage: imgUrl && `url(${imgUrl})`,
            backgroundColor: !imgUrl && 'lightgray',
          }}
        >
          <div className="flex items-center justify-center h-full">
            <div>
              <div className={[section['w__more--title']].join(' ')}>
                <h2 className="leading-5 text-center text-white">
                  Learn more about hosting with Airbnb Experiences
                </h2>
              </div>
              <div className="mt-5 flex justify-center">
                <Button
                  variant="border"
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
