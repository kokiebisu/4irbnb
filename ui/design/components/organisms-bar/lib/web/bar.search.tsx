/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button';

/**
 * Renders the Searchbar
 */
export const SearchBar: React.FC<{
  type?: string;
  selected?: string;
  setSelected?: (param: string) => void;
  transparent?: boolean;
  dispatch?: any;
}> = ({
  type = 'stay',
  selected = null,
  setSelected = () => console.log('clicked'),
  transparent,
  dispatch,
}) => {
  const types: { [type: string]: JSX.Element } = {
    stay: (
      <div
        css={{
          border: '1px solid lightgray',
          display: 'grid',
          gridTemplateColumns: `1.5fr 1px 1fr 1px  1fr 1px ${
            !selected ? '1.5fr' : '2fr'
          }`,
          borderRadius: 50,
          backgroundColor: 'white',
          ...(transparent && { boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 12px' }),
        }}
      >
        <Option
          title="Where are you going?"
          subtitle="Location"
          selected={selected}
          setSelected={setSelected}
          name="location"
          dispatch={dispatch}
        />
        <Seperator />
        <Option
          title="Add dates"
          subtitle="Check in"
          selected={selected}
          setSelected={setSelected}
          name="checkin"
          dispatch={dispatch}
        />
        <Seperator />
        <Option
          title="Add dates"
          subtitle="Check out"
          selected={selected}
          setSelected={setSelected}
          name="checkout"
          dispatch={dispatch}
        />
        <Seperator />
        <button
          css={{
            display: 'block',
            padding: '5px 8px 5px 24px',
            borderRadius: '50px',
            ':hover': {
              bg: 'grey.100',
              transition: '0.4s all',
            },
            ...(selected === 'guests' && {
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px',
            }),
          }}
          onClick={() => {
            setSelected('guests');
            dispatch({ type: 'toggle_guests' });
          }}
        >
          <div
            css={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              ...(selected === 'guests' && { borderRadius: 50 }),
            }}
          >
            <div css={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <div>
                  <h3
                    css={{
                      textAlign: 'left',
                      whitespace: 'nowrap',
                      fontSize: 12,
                    }}
                  >
                    Guests
                  </h3>
                </div>
                <div>
                  <p
                    css={{
                      textAlign: 'left',
                      whitespace: 'nowrap',
                      fontSize: 12,
                    }}
                  >
                    Add guests
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant={$BUTTON.search}
                onClick={() => alert('hello')}
                expand={selected}
              />
            </div>
          </div>
        </button>
      </div>
    ),
    experiences: (
      <div
        css={{
          border: '1px solid lightgray',
          display: 'grid',
          gridTemplateColumns: `1fr 1px ${selected ? '1.25fr' : '1fr'}`,
          borderRadius: 50,
          backgroundColor: 'white',
          ...(transparent && { boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 12px' }),
        }}
      >
        <Option
          title="Where are you going?"
          subtitle="Location"
          selected={selected}
          setSelected={setSelected}
          name="location"
          dispatch={dispatch}
        />
        <Seperator />

        <button
          css={{
            display: 'block',
            padding: '5px 8px 5px 24px',
            borderRadius: '50px',
            ':hover': {
              backgroundColor: 'grey.100',
              transition: '0.4s background-color',
            },
            ...(selected === 'checkin' && {
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px',
            }),
          }}
          onClick={() => {
            setSelected('checkin');
            dispatch({ type: 'toggle_checkin' });
          }}
        >
          <div
            css={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              ...(selected === 'checkin' && { borderRadius: 50 }),
            }}
          >
            <div css={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <div>
                  <h3
                    css={{
                      textAlign: 'left',
                      whitespace: 'nowrap',
                      fontSize: 12,
                    }}
                  >
                    Date
                  </h3>
                </div>
                <div>
                  <p
                    css={{
                      textAlign: 'left',
                      whitespace: 'nowrap',
                      fontSize: 12,
                    }}
                  >
                    Add when you want to go
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant={$BUTTON.search}
                onClick={() => alert('hello')}
                expand={selected}
              />
            </div>
          </div>
        </button>
      </div>
    ),
  };

  return types[type];
};

const Seperator: React.FC<{}> = () => {
  return (
    <div css={{ height: '100%', display: 'flex', alignItems: 'center' }}>
      <div css={{ width: '100%', height: 25 }} sx={{ bg: 'grey.300' }}></div>
    </div>
  );
};

const Option: React.FC<{
  name: string;
  subtitle: string;
  title: string;
  selected: string;
  setSelected: (param: string) => void;
  dispatch: any;
}> = ({ name, subtitle, title, selected, setSelected, dispatch }) => {
  return (
    <button
      css={{
        display: 'block',
        padding: '5px 24px',
        borderRadius: '50px',
        ':hover': {
          backgroundColor: 'grey.100',
          transition: '0.4s background-color',
        },
        ...(selected === name && {
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px',
        }),
      }}
      onClick={() => {
        setSelected(name);
        dispatch({ type: `toggle_${name}` });
      }}
    >
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <div>
            <h3 css={{ textAlign: 'left', fontSize: 12 }}>{title}</h3>
          </div>
          <div>
            <p css={{ textAlign: 'left', fontSize: 12 }}>{subtitle}</p>
          </div>
        </div>
      </div>
    </button>
  );
};
