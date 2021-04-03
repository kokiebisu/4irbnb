import { WorksTemplate } from './template';

export const Works = () => {
  const categories = ['design', 'share', 'submit', 'setup'];
  return <WorksTemplate categories={categories} />;
};
