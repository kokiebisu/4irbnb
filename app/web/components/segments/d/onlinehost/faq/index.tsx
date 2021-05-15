import { FAQSegmentTemplate } from './template';

export const FAQSegment = (props) => {
  const questions = [{ question: 'Example', answer: 'Answer' }];
  return <FAQSegmentTemplate questions={questions} />;
};

export const faq = (props) => {
  return {
    faq: {
      component: <FAQSegment {...props} />,
    },
  };
};
