/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';

/**
 * Renders the /become-a-host/title
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
const TitleCreate: React.FC<{
  data?: any;
  handleTitleChange?: (e) => void;
}> = ({
  data = { title: 'Title here' },
  handleTitleChange = () => alert('Changed title'),
}) => {
  return (
    <div>
      <div css={{ marginBottom: 12 }}>
        <h3 css={{ fontSize: 28, color: 'grey.700' }}>
          Create a title for your listing
        </h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 14, color: 'grey.700' }}>
          Catch guests' attention with a listing title that highlights what
          makes your place special.
        </p>
      </div>
      <div css={{ marginBottom: 30 }}>
        <div css={{ marginBottom: 8 }}>
          <Input
            variant={$INPUT.limit}
            limit={50}
            value={data.title}
            // handleChange={(e) => setData({ ...data, title: e.target.value })}
            handleChange={handleTitleChange}
          />
        </div>
      </div>
    </div>
  );
};

export const title = (props) => {
  return {
    title: {
      component: <TitleCreate {...props} />,
      css: {},
    },
  };
};
