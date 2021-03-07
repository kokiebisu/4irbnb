/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';
import { $MODAL } from '../constant/appearance';

const GuestsModal: React.FC<{}> = () => {
  return (
    <div>
      <div>
        <Input
          variant={$INPUT.counter}
          type="guests"
          title="Adults"
          subtitle="Ages 13 or above"
        />
      </div>
      <div css={{ height: 1, width: '100%', backgroundColor: '#EBEBEB' }} />
      <div>
        <Input
          variant={$INPUT.counter}
          type="guests"
          title="Children"
          subtitle="Ages 2 - 12"
        />
      </div>
      <div css={{ height: 1, width: '100%', backgroundColor: '#EBEBEB' }} />
      <div>
        <Input
          variant={$INPUT.counter}
          type="guests"
          title="Infants"
          subtitle="Under 2"
        />
      </div>
    </div>
  );
};

export const guests = (props) => {
  return {
    [$MODAL.guests]: {
      component: <GuestsModal {...props} />,
      css: {
        maxWidth: 325,
        borderRadius: 32,
        padding: 25,
      },
    },
  };
};
