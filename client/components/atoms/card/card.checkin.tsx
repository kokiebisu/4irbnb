import React, { useReducer } from 'react';
import { CheckInCardProps } from './props';
import card from './card.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import { Flag, Star } from '../../../public/svg/original';
import { ChevronDown } from '../../../public/svg/regular';

const reducer = (state, action) => {
  switch (action.type) {
    case 'guests':
      return { ...state, guests: !state.guests };
    case 'checkout':
      return { ...state, checkout: !state.checkout };
    case 'checkin':
      return { ...state, checkin: !state.checkin };
    default:
      return state;
  }
};

export const CheckInCard: React.FC<CheckInCardProps> = () => {
  const [selected, dispatchSelected] = useReducer(reducer, {
    checkin: false,
    checkout: false,
    guests: false,
  });

  const checkInBorder = () => {
    if (selected.checkin) {
    } else if (selected.checkout) {
    } else if (selected.guests) {
      return [
        shape['w--50p'],
        shape['btlr--6'],
        color['b-l--white__3'],
        color['b-r--white__3'],
        color['b-t--white__3'],
        space['p-v--10'],
      ].join(' ');
    }
    return [
      shape['w--50p'],
      shape['btlr--6'],
      color['b-l--white__3'],
      color['b-r--white__3'],
      color['b-b--white__3'],
      color['b-t--white__3'],
      space['p-v--10'],
    ].join(' ');
  };

  const checkOutBorder = () => {
    if (selected.checkin) {
    } else if (selected.checkout) {
    } else if (selected.guests) {
      return [
        shape['w--50p'],
        shape['btrr--6'],
        color['b-r--white__3'],
        color['b-t--white__3'],
        space['p-v--10'],
      ].join(' ');
    }
    return [
      shape['w--50p'],
      shape['btrr--6'],
      color['b-r--white__3'],
      color['b-b--white__3'],
      color['b-t--white__3'],
      space['p-v--10'],
    ].join(' ');
  };

  const guestBorder = () => {
    if (selected.checkin) {
      return [
        shape['h--full'],
        color['b-t--transparent'],
        color['b-b--transparent'],
        color['b-l--transparent'],
        color['b-r--transparent'],
        space['p-v--12'],
        shape['w--full'],
        shape['bbr--6'],
        color['bg--transparent'],
      ].join(' ');
    } else if (selected.checkout) {
    } else if (selected.guests) {
      return [
        shape['h--full'],
        color['b--gray__3'],
        space['p-v--12'],
        shape['br--6'],
      ].join(' ');
    }
    return [
      shape['h--full'],
      color['b-t--transparent'],
      color['b-b--transparent'],
      color['b-l--transparent'],
      color['b-r--transparent'],
      space['p-v--12'],
      shape['w--full'],
      shape['bbr--6'],
      color['bg--transparent'],
    ].join(' ');
  };

  return (
    <>
      <div
        className={[
          card['display__checkin--wrapper'],
          card['position__checkin--wrapper'],
          shape['shadow--lg'],
          color['b--white__2'],
          card['w__checkin--wrapper'],
          space['p-v--22'],
        ].join(' ')}
        style={{
          backgroundColor: 'white',
          zIndex: 50,
          borderRadius: 10,
        }}>
        <div className={[space['p-h--24']].join(' ')}>
          <div className={[layout['justify-between']].join(' ')}>
            <h3
              className={[
                space['p-v--10'],
                color['c--gray__2'],
                font['size--21'],
                font['weight--500'],
              ].join(' ')}>
              Add dates for prices
            </h3>
            <div
              style={{ width: 100 }}
              className={[
                space['p-v--10'],
                color['c--gray__2'],
                font['size--21'],
                font['weight--500'],
              ].join(' ')}>
              <div
                className={[layout['inline-block'], space['m-r--4']].join(' ')}>
                <Star width={10} />
              </div>
              <span
                className={[
                  layout['inline-block'],
                  font['size--14'],
                  space['m-r--4'],
                ].join(' ')}>
                4.93
              </span>
              <span
                className={[
                  layout['inline-block'],
                  font['size--14'],
                  space['weight-100'],
                  color['c--white__3'],
                ].join(' ')}>
                (248)
              </span>
            </div>
          </div>
          <div
            className={[
              shape['br--8'],
              space['m-t--12'],
              color['b--white__2'],
            ].join(' ')}>
            <div
              style={{ height: 60 }}
              className={[layout['flex'], shape['w--full']].join(' ')}>
              <div
                onClick={() => {
                  console.log('clicked checin');
                  dispatchSelected({ type: 'checkin' });
                }}
                className={checkInBorder()}>
                <div className={[space['p-h--12']].join(' ')}>
                  <label
                    className={[
                      layout['block'],
                      font['text--left'],
                      font['size--10'],
                      font['weight--700'],
                      color['c--gray__3'],
                    ].join(' ')}>
                    CHECK-IN
                  </label>
                  <input
                    className={[
                      shape['w--full'],
                      font['weight--300'],
                      font['size--14'],
                      color['b--0'],
                      shape['outline--none'],
                    ].join(' ')}
                    placeholder='Add date'
                  />
                </div>
              </div>
              <div
                onClick={() => {
                  console.log('clicked checkout');
                  dispatchSelected({ type: 'checkout' });
                }}
                className={checkOutBorder()}>
                <div className={[space['p-h--12']].join(' ')}>
                  <label
                    className={[
                      layout['block'],
                      font['text--left'],
                      font['size--10'],
                      font['weight--700'],
                      color['c--gray__3'],
                    ].join(' ')}>
                    CHECK-OUT
                  </label>
                  <input
                    placeholder='Add date'
                    className={[
                      shape['w--full'],
                      font['weight--300'],
                      font['size--14'],
                      color['b--0'],
                      shape['outline--none'],
                    ].join(' ')}
                  />
                </div>
              </div>
            </div>
            <button
              style={{ height: 60 }}
              onClick={() => {
                console.log('clicked guests');
                dispatchSelected({ type: 'guests' });
              }}
              className={
                selected.guests
                  ? [
                      color['b--gray__3'],
                      shape['w--full'],
                      color['bg--transparent'],
                      shape['br--6'],
                    ].join(' ')
                  : [
                      color['b-t--transparent'],
                      color['b-b--white__3'],
                      color['b-l--white__3'],
                      color['b-r--white__3'],
                      color['bg--transparent'],
                      shape['bbr--6'],
                      shape['w--full'],
                    ].join(' ')
              }>
              <div className={guestBorder()}>
                <div
                  className={[
                    space['p-h--12'],
                    layout['justify-between'],
                    layout['items-center'],
                  ].join(' ')}>
                  <div>
                    <label
                      className={[
                        layout['block'],
                        font['text--left'],
                        font['size--10'],
                        font['weight--700'],
                        color['c--gray__3'],
                      ].join(' ')}>
                      GUESTS
                    </label>
                    <p
                      className={[font['weight--300'], font['size--14']].join(
                        ' '
                      )}>
                      1 guest
                    </p>
                  </div>
                  <div>
                    <ChevronDown width={14} />
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className={[space['m-t--24']].join(' ')}>
            <button
              className={[
                shape['w--full'],
                space['p-v--14'],
                font['size--15'],
                shape['br--5'],
                color['bg--primary'],
                color['c--white__0'],
                font['weight--300'],
              ].join(' ')}>
              Check availability
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
