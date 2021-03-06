/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Bullet, $BULLET } from '@nextbnb/atoms';
import { Layout, $LAYOUT } from '@nextbnb/layout';

export const FAQTemplate: React.FC<{
  questions?: { question: string; answer: string }[];
}> = ({
  questions = [
    {
      question: 'How do I sign up?',
      answer:
        "You'll use the same submission form as for all other experiences. When you get to the Location step, check the Yes, this is an online experience box. Our team will then review your submission as soon as possible and let you know if it’s been approved in 2–4 weeks.",
    },
    {
      question: 'How will I stream my experience online?',
      answer:
        'You’ll use a platform called Zoom which allows all your guests to join the experience at once, enables audio and video so everyone can interact, and offers other tools to help you host. Once your online experience is approved, you’ll receive an invitation to sign up for a free Zoom account. After you sign up, test your internet connection by joining a test meeting and get familiar with its features.',
    },
    {
      question: "What's different about hosting an online experience?",
      answer:
        'The most appealing and inclusive online experiences only require 1–2 hours of time and minimal supplies to participate. The expenses for an online experience are also generally less than what it costs to host in-person, so your pricing should also reflect this. It also requires a camera and a strong internet connection so you can stream audio and video during your experience.',
    },
    {
      question: 'What are Online Experiences?',
      answer:
        'Just like the original, Online Experiences introduce guests to expert hosts, provide a way to meet and interact with new people, and offer a remote-friendly format for everyone who’s quarantined and at home. People can join online experiences from home or anywhere in the world—all they need is an internet connection. They shouldn’t need to be in a specific location or need to bring a lot with them to participate.',
    },
  ],
}) => {
  return (
    <Layout variant={$LAYOUT.onlinehost} title="Frequently asked questions">
      <div
        css={{
          maxWidth: 900,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          columnGap: 13,
        }}
      >
        {questions.map(({ question, answer }, index) => {
          return (
            <div css={{ width: '100%', margin: '22px 0' }} key={index}>
              <Bullet
                variant={$BULLET.QUESTION}
                title={question}
                answer={answer}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
