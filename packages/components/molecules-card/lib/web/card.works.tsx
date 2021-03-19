/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { $CARD } from '../constant/appearance';
import { getWorkContent } from '../logic/logic.work';

const WorksCard: React.FC<{
  work?: string;
}> = ({ work = 'design' }) => {
  const works = getWorkContent();
  return (
    <div>
      <div
        sx={{
          display: ['block', 'block', 'flex'],
        }}
      >
        <div
          sx={{
            width: [
              '100%',
              '100%',
              '50%',
              '50%',
              '50%',
              '50%',
              '50%',
              '50%',
              '50%',
            ],
          }}
        >
          <img src={works[work].imgUrl} alt="works image" />
        </div>
        <div
          sx={{
            width: [
              '100%',
              '100%',
              '50%',
              '50%',
              '50%',
              '50%',
              '50%',
              '50%',
              '50%',
            ],
          }}
        >
          <div css={{ marginBottom: 16 }}>
            <h3>{works[work].title}</h3>
          </div>
          <div>
            <p css={{ fontSize: 13 }}>{works[work].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const works = (props) => {
  return {
    [$CARD.works]: {
      component: <WorksCard {...props} />,
      css: {},
    },
  };
};
