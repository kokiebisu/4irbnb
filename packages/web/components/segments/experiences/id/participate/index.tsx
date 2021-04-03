import { useParticipate } from './logic';
import { ParticipateTemplate } from './template';

export const Participate = () => {
  const data = useParticipate();
  return <ParticipateTemplate {...data} />;
};
