import { FAQSegmentTemplate, FAQSegmentTemplateProps } from "./template";

export type FAQSegmentProps = FAQSegmentTemplateProps;

export const FAQSegment = () => {
  const questions = [{ question: "Example", answer: "Answer" }];
  return <FAQSegmentTemplate questions={questions} />;
};
