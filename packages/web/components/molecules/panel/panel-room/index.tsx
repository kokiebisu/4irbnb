import { RoomPanelTemplate } from './template';

export const RoomPanel = (props) => {
  return <RoomPanelTemplate {...props} />;
};

export const room = (props) => {
  return {
    room: {
      component: <RoomPanel {...props} />,
    },
  };
};
