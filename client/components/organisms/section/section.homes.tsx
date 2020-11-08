import { Button } from '../../../components/atoms/button/button.component';
import React from 'react';

export const HomesSection = () => {
  const filters = [
    { name: 'Cacellation flexibility' },
    { name: 'Type of place' },
    { name: 'Price' },
    { name: 'Instant Book' },
    { name: 'More filters' },
  ];
  return (
    <div>
      <div>
        <p>300+ stays</p>
      </div>
      <div>
        <h3>Stays in Sechelt</h3>
      </div>
      <div>
        {filters.map((filter, index) => {
          return <Button key={index} type='filter' name={filter.name} />;
        })}
      </div>
    </div>
  );
};
