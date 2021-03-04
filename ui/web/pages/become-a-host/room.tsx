import { useEffect, useState } from 'react';
import Router from 'next/router';

import { useStayDispatch, useStayState } from '@context/stay';

import { Prototype, $Prototype } from '@airbnb/components/prototype/web/create';
import {
  inputTypes,
  properties,
} from '@airbnb/components/atoms/input/logic/logic.types';
import { Layout } from '@airbnb/components/layout/web';

const RoomPage = () => {
  const stayDispatch = useStayDispatch();
  const { place, property, stay } = useStayState();

  const [data, setData] = useState({
    place,
    property,
    description: undefined,
    stay,
  });

  const proceed = () => {
    if (data.stay && data.property) {
      stayDispatch({
        type: 'add',
        payload: {
          place: data.place,
          property: data.property,
          stay: data.stay,
        },
      });
      setTimeout(() => {
        Router.push('/become-a-host/bedrooms');
      }, 500);
    }
  };

  const revert = () => {
    setTimeout(() => {
      Router.push('/become-a-host');
    }, 500);
  };

  useEffect(() => {
    if (data.property) {
      setData({
        ...data,
        property: inputTypes[data.place].options[0].props.children,
      });
    }
  }, [data.place]);

  useEffect(() => {
    const displayDescription = () => {
      return properties[data.place].find((type) => type.name === data.property)
        .description;
    };
    if (data.property) {
      setData({ ...data, description: displayDescription() });
    }
  }, [data.property]);

  return (
    <Layout
      variant="create"
      left={
        <Prototype
          title="Property and guests"
          variant={$Prototype.ROOM}
          data={data}
          setData={setData}
        />
      }
      percentage={5}
      next={proceed}
      back={revert}
      criteria={!data.place || !data.property}
    />
  );
};

export default RoomPage;
