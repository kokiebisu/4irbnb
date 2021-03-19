/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm';

const Layout: React.FC<{
  items: { language: string; region: string }[];
  type?: string;
}> = ({ items, type = 'suggested' }) => {
  const titles = {
    suggested: 'Suggested languages and regions',
    choose: 'Choose a language and region',
  };
  return (
    <div>
      <div css={{ marginBottom: 18 }}>
        <h3 css={{ fontSize: 20 }}>{titles[type]}</h3>
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
        {items
          ? items.map(({ language, region }, index) => {
              return (
                <div key={index}>
                  <Button
                    variant={$BUTTON.globe}
                    language={language}
                    region={region}
                    extendsTo={{ textAlign: 'left' }}
                    block
                    selected={index === 0 && type === 'choose'}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

const LanguagePrototype: React.FC<{}> = () => {
  return (
    <div>
      {/* <div className={[space["m-b--24"]].join(" ")}>
        <Layout
          type="suggested"
          items={[{ language: "English", region: "Canada" }]}
        />
      </div> */}
      <div>
        <Layout
          type="choose"
          items={[{ language: 'English', region: 'Canada' }]}
        />
      </div>
    </div>
  );
};

export const language = (props) => {
  return {
    language: {
      component: <LanguagePrototype {...props} />,
      css: {},
    },
  };
};
