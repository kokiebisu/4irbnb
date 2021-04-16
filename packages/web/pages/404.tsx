import React from 'react';
import Link from 'next/link';
import { Header, $Header } from '@header';
import layout from '@styles/layout.module.scss';
import { useTabTitle } from '@hooks/useTabTitle';

// pages/404.js
const ErrorPage = () => {
  useTabTitle('Page not found - Airbnb');
  const links = [
    { name: 'Home', url: '/' },
    { name: 'Hosting on Airbnb', url: '/d/onlinehost' },
  ];

  return (
    <div>
      <div>
        <Header variant={$Header.HOMES} />
      </div>
      <div
        style={{ height: 'calc(100vh - 80px)' }}
        className="flex items-center"
      >
        <div className={[layout['container']].join(' ')}>
          <div className="flex">
            <div className="w-1/2 sm:w-full">
              <div>
                <h1 className="text-5xl">Ooops!</h1>
              </div>
              <div>
                <h4 className="text-xl">
                  We can't seem to find the page you're looking for.
                </h4>
              </div>
              <div className="mt-4">
                <h3 className="text-sm">Error code: 404</h3>
              </div>
              <div className="my-4">
                <div>
                  <p>Here are some helpful links instead:</p>
                </div>
                <div>
                  <div>
                    {links.map(({ name, url }, index) => {
                      return (
                        <div key={index} className="my-3">
                          <Link href={url}>
                            <a className="text-sm font-thin text-green-700">
                              {name}
                            </a>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-4 hidden sm:block">
              <div style={{ width: 350 }}>
                <img src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
