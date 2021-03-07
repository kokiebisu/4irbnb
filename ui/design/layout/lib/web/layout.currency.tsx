/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm';
import { $LAYOUT } from '..';

/**
 * Layout for Currency modal
 * @param {Object[]} items - Currency type
 * @param {string} title - Title of the Template
 */
const CurrencyLayout: React.FC<{
  items?: { name?: string; abbreviation?: string; symbol?: string }[];
  title?: string;
}> = ({ items = [], title = 'Title here' }) => {
  return (
    <div>
      <div css={{ marginBottom: 18 }}>
        <h3 css={{ fontSize: 20 }}>{title}</h3>
      </div>
      <div
        css={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          columnGap: 15,
          rowGap: 15,
          padding: 10,
        }}
      >
        {items?.map(({ name, abbreviation, symbol }, index) => {
          return (
            <div key={index}>
              <Button
                extendsTo={{
                  textAlign: 'left',
                }}
                variant={$BUTTON.currency}
                name={name}
                abbreviation={abbreviation}
                symbol={symbol}
                block
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const currency = (props) => {
  return {
    [$LAYOUT.currency]: {
      component: <CurrencyLayout {...props} />,
      css: {},
    },
  };
};
