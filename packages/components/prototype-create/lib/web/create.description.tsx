/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';

const DescriptionCreate: React.FC<{
  data?: any;
  handleDescriptionChange?: (e) => void;
}> = ({
  data = { description: 'Description here' },
  handleDescriptionChange = (e) =>
    alert(`Changed description to ${e.target.value}`),
}) => {
  return (
    <div>
      <div css={{ marginBottom: 12 }}>
        <h3 css={{ fontSize: 28, color: 'grey.700' }}>
          Describe your place to guests
        </h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 14, color: 'grey.700' }}>
          Mention the best features of your space, any special amenities like
          fast wifi or parking, and what you love about the neighbourhood.
        </p>
      </div>
      <div css={{ marginBottom: 30 }}>
        <div css={{ marginBottom: 8 }}>
          <Input
            variant={$INPUT.textarea}
            limit={500}
            value={data.description}
            handleChange={handleDescriptionChange}
            // handleChange={(e) =>
            //   setData({ ...data, description: e.target.value })
            // }
          />
        </div>
      </div>
    </div>
  );
};

export const description = (props) => {
  return {
    description: {
      component: <DescriptionCreate {...props} />,
      css: {},
    },
  };
};
