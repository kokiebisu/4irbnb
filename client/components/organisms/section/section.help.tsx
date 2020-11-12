import { Layout } from '../../../layout/layout.component';
import React from 'react';
import { Bullet } from '../../../components/atoms/bullet/bullet.component';

export const HelpSection = () => {
  const helps = ['support', 'tools', 'insights', 'education'];
  return (
    <div>
      <div>
        <h1>We're here to help</h1>
      </div>
      <div>
        <div>
          {helps.map((help, index) => {
            return (
              <div key={index}>
                <Bullet type='help' help={help} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
