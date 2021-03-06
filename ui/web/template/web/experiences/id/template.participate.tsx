/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Card, $Card } from '@nextbnb/molecules';

/**
 * Renders the participate section
 * @param {string[]} participates - Ways to participate
 */
export const ParticipateTemplate: React.FC<{
  participates?: string[];
}> = ({ participates = ['call', 'private', 'request'] }) => {
  return (
    <div>
      <div>
        <h3
          css={{
            fontWeight: 500,
            marginBottom: 20,
            color: 'grey.800',
            fontSize: 24,
          }}
        >
          How to participate
        </h3>
      </div>
      <div
        css={{
          display: 'flex',
          marginBottom: 32,
        }}
      >
        {participates.map((participate, index) => {
          return (
            <div key={index} css={{ marginRight: 16 }}>
              <Card variant={$Card.PARTICIPATE} categoryType={participate} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
