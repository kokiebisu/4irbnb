import { formatDistance } from 'date-fns';

export const generateTimestamp = (datetime) => {
  return formatDistance(datetime, new Date(), {
    addSuffix: true,
  });
};
