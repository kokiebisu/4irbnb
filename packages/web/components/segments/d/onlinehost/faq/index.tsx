import { FAQTemplate } from './template';

export const FAQ = () => {
  const questions = [{ question: 'Example', answer: 'Answer' }];
  return <FAQTemplate questions={questions} />;
};
