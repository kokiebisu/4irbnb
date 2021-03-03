/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

const CovidBar: React.FC<{}> = () => {
  return (
    <aside
      sx={{ bg: 'black' }}
      css={{
        fontSize: 14,
        textAlign: 'center',
        padding: '20px 24px',
      }}
    >
      <a href="">
        <p css={{ fontSize: 12 }} sx={{ color: 'white' }}>
          <u>Get the latest on our COVID-19 response</u>
        </p>
      </a>
    </aside>
  );
};

export const covid = (props) => {
  return {
    covid: {
      component: <CovidBar {...props} />,
      css: {},
    },
  };
};
