import { Button } from '@button';

export interface LanguageLayoutProps {
  items?: { language?: string; region?: string }[];
  type?: string;
}

const Layout: React.FC<LanguageLayoutProps> = ({ items, type }) => {
  const titles = {
    suggested: 'Suggested languages and regions',
    choose: 'Choose a language and region',
  };
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg">{titles[type]}</h3>
      </div>
      <div className="w-full grid grid-cols-3 md:grid-cols-5 gap-4 p-3">
        {items.map(({ language, region }, index) => {
          return (
            <div key={index}>
              <Button
                stretch
                variant="globe"
                language={language}
                region={region}
                block
                selected={index === 0 && type === 'choose'}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export interface LanguagePrototypeTemplateProps {}

export const LanguagePrototypeTemplate: React.FC<LanguagePrototypeTemplateProps> = () => {
  return (
    <div>
      <div className="mb-4">
        <Layout
          type="suggested"
          items={[{ language: 'English', region: 'Canada' }]}
        />
      </div>
      <div>
        <Layout
          type="choose"
          items={[
            { language: 'English', region: 'Canada' },
            { language: 'Japanese', region: 'Japan' },
            { language: 'Chinese', region: 'China' },
          ]}
        />
      </div>
    </div>
  );
};
