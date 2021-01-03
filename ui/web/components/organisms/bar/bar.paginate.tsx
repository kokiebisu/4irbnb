import Router from "next/router";

/** components */
import { Button } from "@button";

/** styles **/
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import bar from "@bar/bar.module.scss";
import font from "@styles/font.module.scss";

/**
 * Renders paginate bar component
 * @param {number} page - Current page
 * @param {number} total - Total number of pages
 */
export const PaginateBar: React.FC<{
  page?: number;
  total?: number;
}> = ({ page = 1, total = 15 }) => {
  const displayContent = () => {
    if (page > 4 && page + 3 < total) {
      return (
        <>
          <button
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className={`${
              page === 1
                ? [
                    color["bg--black"],
                    color["c--white"],
                    shape["br--circle"],
                  ].join(" ")
                : [bar["hover__paginate"]].join(" ")
            } ${[space["m-h--6"], layout["inline-block"]].join(" ")}`}
          >
            1
          </button>
          <div
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={[
              layout["relative"],
              space["m-h--6"],
              layout["inline-block"],
            ].join(" ")}
          >
            ...
          </div>
          <button
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className={`${[
              bar["hover__paginate"],
              space["m-h--6"],
              layout["inline-block"],
            ].join(" ")}`}
            onClick={() => Router.push(`/s/homes/${page - 1}`)}
          >
            {page - 1}
          </button>
          <button
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className={`${[
              color["bg--black"],
              color["c--white"],
              shape["br--circle"],
            ].join(" ")} ${[space["m-h--6"], layout["inline-block"]].join(
              " "
            )}`}
          >
            {page}
          </button>
          <button
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className={`${[
              bar["hover__paginate"],
              space["m-h--6"],
              layout["inline-block"],
            ].join(" ")}`}
            onClick={() => Router.push(`/s/homes/${page + 1}`)}
          >
            {page + 1}
          </button>
          <button
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={[
              layout["relative"],
              space["m-h--6"],
              layout["inline-block"],
            ].join(" ")}
          >
            ...
          </button>
          <button
            onClick={() => Router.push(`/s/homes/${total}`)}
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={[
              bar["hover__paginate"],
              space["m-h--12"],
              layout["inline-block"],
            ].join(" ")}
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
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={`${
              page === 1
                ? [
                    color["bg--black"],
                    color["c--white"],
                    shape["br--circle"],
                  ].join(" ")
                : [bar["hover__paginate"]].join(" ")
            } ${[space["m-h--6"], layout["inline-block"]].join(" ")}`}
          >
            1
          </button>
          <button
            onClick={() => Router.push(`/s/homes/2`)}
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={`${
              page === 2
                ? [
                    color["bg--black"],
                    color["c--white"],
                    shape["br--circle"],
                  ].join(" ")
                : [bar["hover__paginate"]].join(" ")
            } ${[space["m-h--6"], layout["inline-block"]].join(" ")}`}
          >
            2
          </button>
          <button
            onClick={() => Router.push(`/s/homes/3`)}
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={`${
              page === 3
                ? [
                    color["bg--black"],
                    color["c--white"],
                    shape["br--circle"],
                  ].join(" ")
                : [bar["hover__paginate"]].join(" ")
            } ${[space["m-h--6"], layout["inline-block"]].join(" ")}`}
          >
            3
          </button>
          <button
            onClick={() => Router.push(`/s/homes/4`)}
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={`${
              page === 4
                ? [
                    color["bg--black"],
                    color["c--white"],
                    shape["br--circle"],
                  ].join(" ")
                : [bar["hover__paginate"]].join(" ")
            } ${[space["m-h--6"], layout["inline-block"]].join(" ")}`}
          >
            4
          </button>
          <button
            onClick={() => Router.push(`/s/homes/5`)}
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={`${
              page === 5
                ? [
                    color["bg--black"],
                    color["c--white"],
                    shape["br--circle"],
                  ].join(" ")
                : [bar["hover__paginate"]].join(" ")
            } ${[space["m-h--6"], layout["inline-block"]].join(" ")}`}
          >
            5
          </button>
          <a
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={[
              layout["relative"],
              space["m-h--6"],
              layout["inline-block"],
            ].join(" ")}
          >
            ...
          </a>
          <a
            onClick={() => Router.push(`/s/homes/${total}`)}
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={[
              bar["hover__paginate"],
              space["m-h--12"],
              layout["inline-block"],
            ].join(" ")}
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
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={[
              bar["hover__paginate"],
              space["m-h--12"],
              layout["inline-block"],
            ].join(" ")}
          >
            1
          </button>
          <button
            onClick={() => Router.push("/")}
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={[
              bar["hover__paginate"],
              layout["relative"],
              space["m-h--6"],
              layout["inline-block"],
            ].join(" ")}
          >
            ...
          </button>
          <button
            onClick={() => Router.push(`/s/homes/${total - 3}`)}
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={`${
              page === total - 3
                ? [
                    color["bg--black"],
                    color["c--white"],
                    shape["br--circle"],
                  ].join(" ")
                : [bar["hover__paginate"]].join(" ")
            } ${[space["m-h--6"], layout["inline-block"]].join(" ")}`}
          >
            {total - 3}
          </button>
          <button
            onClick={() => Router.push(`/s/homes/${total - 2}`)}
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={`${
              page === total - 2
                ? [
                    color["bg--black"],
                    color["c--white"],
                    shape["br--circle"],
                  ].join(" ")
                : [bar["hover__paginate"]].join(" ")
            } ${[space["m-h--6"], layout["inline-block"]].join(" ")}`}
          >
            {total - 2}
          </button>
          <button
            onClick={() => Router.push(`/s/homes/${total - 1}`)}
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={`${
              page === total - 1
                ? [
                    color["bg--black"],
                    color["c--white"],
                    shape["br--circle"],
                  ].join(" ")
                : [bar["hover__paginate"]].join(" ")
            } ${[space["m-h--6"], layout["inline-block"]].join(" ")}`}
          >
            {total - 1}
          </button>
          <button
            onClick={() => Router.push(`/s/homes/${total}`)}
            style={{
              width: 36,
              height: 36,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 4,
            }}
            className={`${
              page === total
                ? [
                    color["bg--black"],
                    color["c--white"],
                    shape["br--circle"],
                  ].join(" ")
                : [bar["hover__paginate"]].join(" ")
            } ${[space["m-h--6"], layout["inline-block"]].join(" ")}`}
          >
            {total}
          </button>
        </>
      );
    }
  };
  return (
    <div className={[layout["inline-block"]].join(" ")}>
      <div className={[layout["flex"], layout["items-center"]].join(" ")}>
        {page !== 1 && (
          <Button
            variant="paginate"
            animate
            direction="left"
            onClick={() => Router.push(`/s/homes/page/${page - 1}`)}
          />
        )}
        <div className={[space["m-h--8"]].join(" ")}>{displayContent()}</div>
        {page !== total && (
          <Button
            variant="paginate"
            animate
            direction="right"
            onClick={() => Router.push(`/s/homes/page/${page + 1}`)}
          />
        )}
      </div>
      <div className={[space["m-t--14"]].join(" ")}>
        <p className={[layout["text-center"]].join(" ")}>
          61 – 80 of 300+ places to stay
        </p>
      </div>
      <div className={[space["m-t--28"]].join(" ")}>
        <p
          className={[
            font["size--12"],
            layout["text-center"],
            color["c--gray__1"],
          ].join(" ")}
        >
          Enter dates to see full pricing. Additional fees apply. Taxes may be
          added.
        </p>
      </div>
    </div>
  );
};
