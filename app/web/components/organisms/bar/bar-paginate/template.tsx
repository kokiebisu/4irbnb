import Router from "next/router";
import { Button } from "@atoms";

export interface PaginateBarTemplateProps {
  page: number;
  total: number;
}

/**
 * Renders paginate bar component
 * @param {number} page - Current page
 * @param {number} total - Total number of pages
 */
export const PaginateBarTemplate = ({
  page,
  total,
}: PaginateBarTemplateProps): JSX.Element => {
  const displayContent = () => {
    if (page > 4 && page + 3 < total) {
      return (
        <>
          <button
            className={`mh-1 w-8 h-8 inline-flex items-center justify-center ${
              page === 1
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            }`}
          >
            1
          </button>
          <div className="relative mx-2 inline-flex w-8 h-8 items-center justify-center bottom-1">
            ...
          </div>
          <button
            className="w-8 h-8 inline-flex items-center justify-center hover:underline mx-2"
            onClick={() => Router.push(`/s/homes/${page - 1}`)}
          >
            {page - 1}
          </button>
          <button className="bg-black text-white rounded-full w-6 h-6 inline-flex items-center justify-center">
            {page}
          </button>
          <button
            className="w-8 h-8 inline-flex items-center justify-center hover:paginate mx-2"
            onClick={() => Router.push(`/s/homes/${page + 1}`)}
          >
            {page + 1}
          </button>
          <button
            className={`w-6 h-6 inline-flex items-center justify-center bottom-1 mx-2 inline-block${
              page === total - 3
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            }`}
          >
            ...
          </button>
          <button
            onClick={() => Router.push(`/s/homes/${total}`)}
            className={`w-6 h-6 inline-flex items-center justify-center bottom-1 mx-2 inline-block${
              page === total - 3
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            }`}
          >
            {total}
          </button>
        </>
      );
    } else if (page < 5 && total > 7) {
      return (
        <>
          <button
            onClick={() => Router.push(`/s/homes/1`)}
            className={`w-6 h-6 inline-flex items-center justify-center bottom-1 mx-2 inline-block${
              page === total - 3
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            }`}
          >
            1
          </button>
          <button
            onClick={() => Router.push(`/s/homes/2`)}
            className={`w-6 h-6 inline-flex items-center justify-center bottom-1 mx-2 inline-block${
              page === total - 3
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            }`}
          >
            2
          </button>
          <button
            onClick={() => Router.push(`/s/homes/3`)}
            className={`w-6 h-6 inline-flex items-center justify-center bottom-1 mx-2 inline-block${
              page === total - 3
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            }`}
          >
            3
          </button>
          <button
            onClick={() => Router.push(`/s/homes/4`)}
            className={`w-6 h-6 inline-flex items-center justify-center bottom-1 mx-2 inline-block${
              page === total - 3
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            }`}
          >
            4
          </button>
          <button
            onClick={() => Router.push(`/s/homes/5`)}
            className={`w-6 h-6 inline-flex items-center justify-center bottom-1 mx-2 inline-block${
              page === total - 3
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            }`}
          >
            5
          </button>
          <a className="relative mx-2 inline-flex items-center justify-center w-6 h-6 bottom-1">
            ...
          </a>
          <a
            onClick={() => Router.push(`/s/homes/${total}`)}
            className="relative mx-2 inline-flex items-center justify-center w-6 h-6 bottom-1"
          >
            {total}
          </a>
        </>
      );
    } else if (page + 3 >= total) {
      return (
        <>
          <button
            onClick={() => Router.push(`/s/homes/1`)}
            className="w-6 h-6 inline-flex items-center justify-center bottom-1 hover:underline mx-3"
          >
            1
          </button>
          <button
            onClick={() => Router.push("/")}
            className="hover:underline relative mx-2 w-6 h-6 inline-flex items-center justify-center bottom-1"
          >
            ...
          </button>
          <button
            onClick={() => Router.push(`/s/homes/${total - 3}`)}
            className={`w-6 h-6 inline-flex items-center justify-center bottom-1 mx-2 inline-block${
              page === total - 3
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            }`}
          >
            {total - 3}
          </button>
          <button
            onClick={() => Router.push(`/s/homes/${total - 2}`)}
            className={`w-6 h-6 inline-flex items-center justify-center bottom-1 mx-2 ${
              page === total - 2
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            }`}
          >
            {total - 2}
          </button>
          <button
            onClick={() => Router.push(`/s/homes/${total - 1}`)}
            className={`w-6 h-6 inline-flex items-center justify-center bottom-1 mx-2 inline-block${
              page === total - 3
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            }`}
          >
            {total - 1}
          </button>
          <button
            onClick={() => Router.push(`/s/homes/${total}`)}
            className={`w-6 h-6 inline-flex items-center justify-center bottom-1 mx-2 ${
              page === total
                ? "bg-black text-white rounded-full"
                : "hover:underline"
            } `}
          >
            {total}
          </button>
        </>
      );
    } else return null;
  };
  return (
    <div className="inline-block">
      <div className="flex items-center">
        {page !== 1 && (
          <Button
            variant="paginate"
            direction="chevronLeft"
            onClick={() => Router.push(`/s/homes/page/${page - 1}`)}
          />
        )}
        <div className="mx-2">{displayContent()}</div>
        {page !== total && (
          <Button
            variant="paginate"
            direction="chevronRight"
            onClick={() => Router.push(`/s/homes/page/${page + 1}`)}
          />
        )}
      </div>
      <div className="mt-4">
        <p className="text-center">61 – 80 of 300+ places to stay</p>
      </div>
      <div className="mt-6">
        <p className="text-xs text-center text-gray-300">
          Enter dates to see full pricing. Additional fees apply. Taxes may be
          added.
        </p>
      </div>
    </div>
  );
};
