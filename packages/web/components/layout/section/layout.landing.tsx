import layout from '@styles/layout.module.scss';
import index from '@styles/index.module.scss';

export const LandingLayout: React.FC<{
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  spread?: boolean;
}> = ({ title, subtitle, children, dark = false, spread = false }) => {
  return (
    <div
      className={`py-4 ${[index['p__category']].join(' ')} ${
        dark ? 'bg-black' : ''
      }`}
    >
      <div
        className={`${
          spread
            ? [layout['container--spread']].join(' ')
            : [layout['container']].join(' ')
        }  ${dark ? 'bg-black' : ''}`}
      >
        <div className="py-3">
          {title && (
            <h3
              className={`${[layout['font__section--title']].join(' ')} ${
                dark ? 'text-white' : ''
              }`}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <div style={{ width: 450 }}>
              <p
                className={`${[layout['font__section--subtitle']].join(' ')} ${
                  dark ? 'text-white' : ''
                }`}
              >
                {subtitle}
              </p>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
