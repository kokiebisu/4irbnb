/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button';
import { Input, $Input } from '@nextbnb/atoms-input';
import { Plus } from '@nextbnb/design/assets/svg/original';
import { $MODAL } from '../constant/appearance';

const ListingModal: React.FC<{}> = () => {
  return (
    <div>
      <div css={{ marginBottom: 24 }}>
        <h4 css={{ fontSize: 16 }}>
          To get started, tell us more about your place
        </h4>
      </div>
      <div>
        <Input variant={$Input.ADDRESS} direction="bottom" />
        <Input variant={$Input.PLACE} direction="middle" />
        <Input variant={$Input.GUESTS} direction="top" />
      </div>
      <div
        css={{
          marginTop: 20,
          marginBottom: 45,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div>
          <Plus width={15} height={15} fill="black" />
        </div>
        <div>
          <h3 css={{ fontSize: 14 }}>
            Let us know any special spaces guests can access
          </h3>
        </div>
      </div>
      <div>
        <Button
          variant={$BUTTON.primary}
          fill="black"
          block
          title="Start your listing"
        />
      </div>
    </div>
  );
};

export const listing = (props) => {
  return {
    [$MODAL.listing]: {
      component: <ListingModal {...props} />,
      extendsTo: {
        maxWidth: 500,
        padding: 25,
        borderRadius: 20,
      },
    },
  };
};
