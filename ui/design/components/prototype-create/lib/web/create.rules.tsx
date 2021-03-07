/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';

/**
 * Renders the /become-a-host/rules page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
const RulesCreate: React.FC<{
  data?: any;
  excludeRule?: (type: string, params: any) => void;
  includeRule?: (type: string, params: any) => void;
}> = ({
  data = { details: [] },
  excludeRule = (type: string, params: any) =>
    alert(`Excluded ${params} from ${type}`),
  includeRule = (type: string, params: any) =>
    alert(`Included ${params} from ${type}`),
}) => {
  const modify = (type: string, params: string) => {
    if (data[type].includes(params)) {
      // setData({
      //   ...data,
      //   [type]: [...data[type]].filter((element) => element !== params),
      // });
      excludeRule(type, params);
    } else {
      // setData({
      //   ...data,
      //   [type]: [...data[type], params],
      // });
      includeRule(type, params);
    }
  };

  return (
    <div>
      <div>
        <h3 css={{ fontSize: 28, color: 'grey.700' }}>
          Set house rules for your guests
        </h3>
      </div>
      <div>
        <p css={{ fontSize: 15 }}>
          Guests must agree to your house rules before they book.
        </p>
      </div>
      <div css={{ marginBottom: 22 }}>
        <div css={{ margin: '12px 0' }}>
          <Input
            variant={$INPUT.closed}
            title="Smoking allowed"
            data={data}
            // setData={setData}
            value="smoking"
          />
        </div>
        <div css={{ margin: '12px 0' }}>
          <Input
            variant={$INPUT.closed}
            title="Events allowed"
            data={data}
            // setData={setData}
            value="event"
          />
        </div>
      </div>
      <div css={{ marginBottom: 50 }}>
        <div css={{ margin: '16px 0' }}>
          <h3>Details guests must know about your home</h3>
        </div>
        {[
          {
            title: 'Must climb stairs',
            item: 'stairs',
          },
          {
            title: 'Potential for noise',
            item: 'noise',
          },
          {
            title: 'Pet(s) live on property',
            item: 'pets',
          },
        ].map(({ title, item }, index) => {
          return (
            <div key={index} css={{ marginBottom: 16 }}>
              <Input
                check={() => modify('details', item)}
                checked={data.details.includes(item)}
                variant={$INPUT.checkbox}
                title={title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const rules = (props) => {
  return {
    rules: {
      component: <RulesCreate {...props} />,
      css: {},
    },
  };
};
