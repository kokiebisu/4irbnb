/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm';

/**
 * Renders paginate bar component
 * @param {number} page - Current page
 * @param {number} total - Total number of pages
 */
const PaginateBar: React.FC<{
  page?: number;
  total?: number;
  navigate?: any;
}> = ({ page = 1, total = 15, navigate }) => {
  const displayContent = () => {
    if (page > 4 && page + 3 < total) {
      return (
        <div>
          <button
            css={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 6px',
              ...(page === 1
                ? { borderRadius: 9999 }
                : {
                    ':hover': {
                      textDecoration: 'underline',
                    },
                  }),
            }}
            sx={{
              ...(page === 1 && { bg: 'black', color: 'white' }),
            }}
          >
            1
          </button>
          <div
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              position: 'relative',
              margin: '0 6px',
            }}
          >
            ...
          </div>
          <button
            css={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 6px',
              ':hover': {
                textDecoration: 'underline',
              },
            }}
            onClick={() => navigate(page - 1)}
          >
            {page - 1}
          </button>
          <button
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 6px',
              borderRadius: 9999,
            }}
            sx={{
              bg: 'black',
              color: 'white',
            }}
          >
            {page}
          </button>
          <button
            css={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 6px',
              ':hover': {
                textDecoration: 'underline',
              },
            }}
            onClick={() => navigate(page + 1)}
          >
            {page + 1}
          </button>
          <button
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              position: 'relative',
              margin: '0 6px',
            }}
          >
            ...
          </button>
          <button
            onClick={() => navigate(total)}
            css={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 12px',
              ':hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {total}
          </button>
        </div>
      );
    } else if (page < 5 && total > 7) {
      return (
        <div>
          <button
            onClick={() => navigate(1)}
            css={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 6px',
              ...(page === 1
                ? { bg: 'black', color: 'white', borderRadius: 9999 }
                : { ':hover': { textDecoration: 'underline' } }),
            }}
          >
            1
          </button>
          <button
            onClick={() => navigate(2)}
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 6px',
              ...(page === 2
                ? {
                    bg: 'black',
                    color: 'white',
                    borderRadius: 9999,
                  }
                : {
                    ':hover': {
                      textDecoration: 'underline',
                    },
                  }),
            }}
          >
            2
          </button>
          <button
            onClick={() => navigate(3)}
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 6px',
              ...(page === 2
                ? {
                    bg: 'black',
                    color: 'white',
                    borderRadius: 9999,
                  }
                : {
                    ':hover': {
                      textDecoration: 'underline',
                    },
                  }),
            }}
          >
            3
          </button>
          <button
            onClick={() => navigate(4)}
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 6px',
              ...(page === 2
                ? {
                    bg: 'black',
                    color: 'white',
                    borderRadius: 9999,
                  }
                : {
                    ':hover': {
                      textDecoration: 'underline',
                    },
                  }),
            }}
          >
            4
          </button>
          <button
            onClick={() => navigate(5)}
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 6px',
              ...(page === 2
                ? {
                    bg: 'black',
                    color: 'white',
                    borderRadius: 9999,
                  }
                : {
                    ':hover': {
                      textDecoration: 'underline',
                    },
                  }),
            }}
          >
            5
          </button>
          <a
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              position: 'relative',
              margin: '0 6px',
            }}
          >
            ...
          </a>
          <a
            onClick={() => navigate(total)}
            css={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 12px',
              ':hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {total}
          </a>
        </div>
      );
    } else if (page + 3 >= total) {
      return (
        <div>
          <button
            onClick={() => navigate(1)}
            css={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 12px',
              ':hover': {
                textDecoration: 'underline',
              },
            }}
          >
            1
          </button>
          <button
            onClick={() => navigate('')}
            css={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              position: 'relative',
              margin: '0 6px',
              ':hover': {
                textDecoration: 'underline',
              },
            }}
          >
            ...
          </button>
          <button
            onClick={() => navigate(total - 3)}
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 6px',
              ...(page === total - 3
                ? { bg: 'black', color: 'white', borderRadius: 9999 }
                : { ':hover': { textDecoration: 'underline' } }),
            }}
          >
            {total - 3}
          </button>
          <button
            onClick={() => navigate(total - 2)}
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 6px',
              ...(page === total - 2
                ? { bg: 'black', color: 'white', borderRadius: 9999 }
                : { ':hover': { textDecoration: 'underline' } }),
            }}
          >
            {total - 2}
          </button>
          <button
            onClick={() => navigate(total - 1)}
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 6px',
              ...(page === total - 1
                ? { bg: 'black', color: 'white', borderRadius: 9999 }
                : { ':hover': { textDecoration: 'underline' } }),
            }}
          >
            {total - 1}
          </button>
          <button
            onClick={() => navigate(total)}
            style={{
              width: 36,
              height: 36,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 4,
              margin: '0 6px',
              ...(page === total
                ? {
                    bg: 'black',
                    color: 'white',
                    borderRadius: 9999,
                  }
                : {
                    ':hover': {
                      textDecoration: 'underline',
                    },
                  }),
            }}
          >
            {total}
          </button>
        </div>
      );
    }
  };
  return (
    <div css={{ display: 'inline-block' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        {page !== 1 && (
          <Button
            variant={$BUTTON.paginate}
            animate
            direction="left"
            onClick={() => navigate(page - 1)}
          />
        )}
        <div css={{ margin: '0 8px' }}>{displayContent()}</div>
        {page !== total && (
          <Button
            variant={$BUTTON.paginate}
            animate
            direction="right"
            onClick={() => navigate(page + 1)}
          />
        )}
      </div>
      <div css={{ marginTop: 14 }}>
        <p css={{ textAlign: 'center' }}>61 – 80 of 300+ places to stay</p>
      </div>
      <div css={{ marginTop: 28 }}>
        <p
          css={{
            fontSize: 12,
            textAlign: 'center',
            color: 'grey.600',
          }}
        >
          Enter dates to see full pricing. Additional fees apply. Taxes may be
          added.
        </p>
      </div>
    </div>
  );
};

export const paginate = (props) => {
  return {
    paginate: {
      component: <PaginateBar {...props} />,
      css: {},
    },
  };
};
