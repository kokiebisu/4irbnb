import { formatDistance } from 'date-fns';

export const generateTimestamp = (datetime: Date) => {
  return formatDistance(datetime, new Date(), {
    addSuffix: true,
  });
};
