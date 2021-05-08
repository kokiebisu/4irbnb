import { also } from '../also';
import { homes } from '../homes';
import { multiple } from '../multiple';

export const factory = (props) => {
  return {
    ...also(props),
    ...homes(props),
    ...multiple(props),
  };
};
