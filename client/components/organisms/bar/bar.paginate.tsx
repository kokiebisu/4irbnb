import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

/**
 * Components
 */
import { Button } from '../../../components/atoms/button/button.component';

import { PaginateBarProps } from './props';

/**
 * Styles
 */
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import bar from './bar.module.scss';
import font from '../../../styles/font.module.scss';

export const PaginateBar: React.FC<PaginateBarProps> = ({
  page = 1,
  total = 15,
}) => {
  const displayContent = () => {
    if (page > 4 && page + 3 < total) {
      return (
        <>
          <a
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={`${
              page === 1
                ? [
                    color['bg--black'],
                    color['c--white__0'],
                    shape['br--circle'],
                  ].join(' ')
                : [bar['hover__paginate']].join(' ')
            } ${[space['m-h--6'], layout['inline-block']].join(' ')}`}>
            1
          </a>
          <a
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
            }}
            className={[
              layout['relative'],
              space['m-h--6'],
              layout['inline-block'],
            ].join(' ')}>
            ...
          </a>
          <Link href={`/s/homes/${page - 1}`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className={`${[
                bar['hover__paginate'],
                space['m-h--6'],
                layout['inline-block'],
              ].join(' ')}`}>
              {page - 1}
            </a>
          </Link>
          <a
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={`${[
              color['bg--black'],
              color['c--white__0'],
              shape['br--circle'],
            ].join(' ')} ${[space['m-h--6'], layout['inline-block']].join(
              ' '
            )}`}>
            {page}
          </a>
          <Link href={`/s/homes/${page + 1}`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className={`${[
                bar['hover__paginate'],
                space['m-h--6'],
                layout['inline-block'],
              ].join(' ')}`}>
              {page + 1}
            </a>
          </Link>
          <a
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
            }}
            className={[
              layout['relative'],
              space['m-h--6'],
              layout['inline-block'],
            ].join(' ')}>
            ...
          </a>

          <Link href={`/s/homes/${total}`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={[
                bar['hover__paginate'],
                space['m-h--12'],
                layout['inline-block'],
              ].join(' ')}>
              {total}
            </a>
          </Link>
        </>
      );
    } else if (page < 5 && total > 7) {
      return (
        <>
          <Link href={`/s/homes/1`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={`${
                page === 1
                  ? [
                      color['bg--black'],
                      color['c--white__0'],
                      shape['br--circle'],
                    ].join(' ')
                  : [bar['hover__paginate']].join(' ')
              } ${[space['m-h--6'], layout['inline-block']].join(' ')}`}>
              1
            </a>
          </Link>
          <Link href={`/s/homes/2`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={`${
                page === 2
                  ? [
                      color['bg--black'],
                      color['c--white__0'],
                      shape['br--circle'],
                    ].join(' ')
                  : [bar['hover__paginate']].join(' ')
              } ${[space['m-h--6'], layout['inline-block']].join(' ')}`}>
              2
            </a>
          </Link>
          <Link href={`/s/homes/3`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={`${
                page === 3
                  ? [
                      color['bg--black'],
                      color['c--white__0'],
                      shape['br--circle'],
                    ].join(' ')
                  : [bar['hover__paginate']].join(' ')
              } ${[space['m-h--6'], layout['inline-block']].join(' ')}`}>
              3
            </a>
          </Link>
          <Link href={`/s/homes/4`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={`${
                page === 4
                  ? [
                      color['bg--black'],
                      color['c--white__0'],
                      shape['br--circle'],
                    ].join(' ')
                  : [bar['hover__paginate']].join(' ')
              } ${[space['m-h--6'], layout['inline-block']].join(' ')}`}>
              4
            </a>
          </Link>
          <Link href={`/s/homes/5`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={`${
                page === 5
                  ? [
                      color['bg--black'],
                      color['c--white__0'],
                      shape['br--circle'],
                    ].join(' ')
                  : [bar['hover__paginate']].join(' ')
              } ${[space['m-h--6'], layout['inline-block']].join(' ')}`}>
              5
            </a>
          </Link>
          <a
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
            }}
            className={[
              layout['relative'],
              space['m-h--6'],
              layout['inline-block'],
            ].join(' ')}>
            ...
          </a>
          <Link href={`/s/homes/${total}`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={[
                bar['hover__paginate'],
                space['m-h--12'],
                layout['inline-block'],
              ].join(' ')}>
              {total}
            </a>
          </Link>
        </>
      );
    } else if (page + 3 >= total) {
      return (
        <>
          <Link href={`/s/homes/1`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={[
                bar['hover__paginate'],
                space['m-h--12'],
                layout['inline-block'],
              ].join(' ')}>
              1
            </a>
          </Link>
          <Link href='/'>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={[
                bar['hover__paginate'],
                layout['relative'],
                space['m-h--6'],
                layout['inline-block'],
              ].join(' ')}>
              ...
            </a>
          </Link>
          <Link href={`/s/homes/${total - 3}`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={`${
                page === total - 3
                  ? [
                      color['bg--black'],
                      color['c--white__0'],
                      shape['br--circle'],
                    ].join(' ')
                  : [bar['hover__paginate']].join(' ')
              } ${[space['m-h--6'], layout['inline-block']].join(' ')}`}>
              {total - 3}
            </a>
          </Link>
          <Link href={`/s/homes/${total - 2}`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={`${
                page === total - 2
                  ? [
                      color['bg--black'],
                      color['c--white__0'],
                      shape['br--circle'],
                    ].join(' ')
                  : [bar['hover__paginate']].join(' ')
              } ${[space['m-h--6'], layout['inline-block']].join(' ')}`}>
              {total - 2}
            </a>
          </Link>
          <Link href={`/s/homes/${total - 1}`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={`${
                page === total - 1
                  ? [
                      color['bg--black'],
                      color['c--white__0'],
                      shape['br--circle'],
                    ].join(' ')
                  : [bar['hover__paginate']].join(' ')
              } ${[space['m-h--6'], layout['inline-block']].join(' ')}`}>
              {total - 1}
            </a>
          </Link>
          <Link href={`/s/homes/${total}`}>
            <a
              style={{
                width: 36,
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 4,
              }}
              className={`${
                page === total
                  ? [
                      color['bg--black'],
                      color['c--white__0'],
                      shape['br--circle'],
                    ].join(' ')
                  : [bar['hover__paginate']].join(' ')
              } ${[space['m-h--6'], layout['inline-block']].join(' ')}`}>
              {total}
            </a>
          </Link>
        </>
      );
    }
  };
  return (
    <div className={[layout['inline-block']].join(' ')}>
      <div className={[layout['flex'], layout['items-center']].join(' ')}>
        {page !== 1 && (
          <Button
            type='paginate'
            direction='left'
            onPress={() => Router.push(`/s/homes/page/${page - 1}`)}
          />
        )}
        <div className={[space['m-h--8']].join(' ')}>{displayContent()}</div>
        {page !== total && (
          <Button
            type='paginate'
            direction='right'
            onPress={() => Router.push(`/s/homes/page/${page + 1}`)}
          />
        )}
      </div>
      <div className={[space['m-t--14']].join(' ')}>
        <p className={[layout['text-center']].join(' ')}>
          61 – 80 of 300+ places to stay
        </p>
      </div>
      <div className={[space['m-t--28']].join(' ')}>
        <p
          className={[
            font['size--12'],
            layout['text-center'],
            color['c--gray__1'],
          ].join(' ')}>
          Enter dates to see full pricing. Additional fees apply. Taxes may be
          added.
        </p>
      </div>
    </div>
  );
};
