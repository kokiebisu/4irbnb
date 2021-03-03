/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button';

const CreateBar: React.FC<{
  next?: () => void;
  back?: () => void;
  criteria?: boolean;
}> = ({
  next = () => alert('next button pressed'),
  back = () => alert('back button pressed'),
  criteria = true,
}) => {
  return (
    <div
      css={{ width: '100%', padding: '16px 0' }}
      sx={{ borderTop: '1px solid', borderColor: 'grey.100' }}
    >
      <div
        css={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Button variant={$BUTTON.back} onClick={back} />
        </div>
        <div>
          <Button
            variant={$BUTTON.primary}
            title="Next"
            size="md"
            fill="#018489"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};

export const create = (props) => {
  return {
    create: {
      component: <CreateBar {...props} />,
      css: {},
    },
  };
};
