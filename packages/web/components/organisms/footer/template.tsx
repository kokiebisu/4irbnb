import { Button } from '@button';
import { Icon } from '@icons';

export interface FooterTemplateProps {
  spread?: boolean;
  handleRedirectToPath: (url: string) => void;
  items?: { name: string; items: { url?: string; name?: string }[] }[];
}

export const FooterTemplate: React.FC<FooterTemplateProps> = ({
  spread,
  handleRedirectToPath,
  items,
}) => {
  return (
    <footer className="border-t border-gray-300 py-6 bg-gray-300">
      <div className={spread ? 'container-spread' : 'container'}>
        <div className="border-b border-gray-300 md:flex">
          {items.map((section, index) => {
            return (
              <div
                key={index}
                className="border-t border-gray-300 mt-6 first:mt-0 md:w-1/4 md:pb-6"
              >
                <div>
                  <h3 className="uppercase text-sm">{section.name}</h3>
                </div>
                <div className="my-4 grid grid-cols-3">
                  {section.items.map(({ name, url }, index) => {
                    return (
                      <div className="my-4 mt-3 mb-3" key={index}>
                        <Button
                          variant="link"
                          onClick={() => handleRedirectToPath(url)}
                          title={name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:flex md:items-center md:justify-between md:flex-row-reverse">
          <div className="flex items-center mx-0 my-8">
            <div>
              <button className="flex items-center mr-3 bg-transparent border-none">
                <Icon variant="general" generalType="globe" width={16} />
                <u className="text-sm mr-3">English(CA)</u>
              </button>
            </div>
            <div>
              <Button variant="underline" title="$ CAD" bold />
            </div>
          </div>
          <div className="flex items-center">
            <div className={styles['footer__rights']}>
              <h4 className="text-md">
                &copy; 2020 Airbnb, Inc. All rights reserved
              </h4>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">&nbsp;&nbsp;· &nbsp;</div>
              <div className="mr-3">
                <Button
                  variant="link"
                  title="Privacy"
                  onClick={() => handleRedirectToPath('/')}
                />
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className="mr-3">
                <Button
                  variant="link"
                  title="Terms"
                  onClick={() => handleRedirectToPath('/')}
                />
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div className="mr-3">
                <Button
                  variant="link"
                  title="Sitemap"
                  onClick={() => handleRedirectToPath('/')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
