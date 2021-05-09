export const useCharacteristicsBullet = ({ time }) => {
  const displayDuration = (time: number) => {
    if (time % 60 !== 0) {
      return `${time} mins`;
    }
    if (time / 60 > 1) {
      return `${time / 60} hours`;
    }
    return '1 hour';
  };

  return { duration: displayDuration(time) };
};
