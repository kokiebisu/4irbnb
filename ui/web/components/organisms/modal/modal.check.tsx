import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

import { ChevronLeft, ChevronRight } from "@svg/regular";

import { Button } from "@button";

import * as buttonVariant from "@button/variants";

export const CheckModal: React.FC<{}> = () => {
  return (
    <div className={[layout["flex"], layout["justify-center"]].join(" ")}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: 50,
        }}
      >
        <div>
          <Calendar previous={() => alert("previous")} />
        </div>
        <div>
          <Calendar next={() => alert("next")} />
        </div>
      </div>
    </div>
  );
};

const Calendar: React.FC<{
  next?: () => void;
  previous?: () => void;
}> = ({ next, previous }) => {
  return (
    <div style={{ width: 294 }}>
      <div
        className={[
          layout["flex"],
          layout["justify-center"],
          layout["items-center"],
          layout["relative"],
          space["m-t--8"],
          space["m-b--16"],
        ].join(" ")}
      >
        <div style={{ position: "absolute", left: 0 }}>
          {previous && (
            <ChevronLeft width={12} stroke="black" strokeWidth={3} />
          )}
        </div>
        <div>
          <h3 className={[font["size--14"]].join(" ")}>December 2020</h3>
        </div>
        <div style={{ position: "absolute", right: 0 }}>
          {next && <ChevronRight width={12} stroke="black" strokeWidth={3} />}
        </div>
      </div>
      <div className={[shape["w--full"]].join(" ")}>
        <div style={{ display: "table", tableLayout: "fixed" }}>
          <div>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => {
              return (
                <div key={index} style={{ display: "table-cell", width: 42 }}>
                  <div
                    className={[layout["flex"], layout["justify-center"]].join(
                      " "
                    )}
                  >
                    <h4 className={[font["size--10"]].join(" ")}>{day}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={[space["m-v--4"]].join(" ")}>
            {[1, 2, 3, 4, 5, 6, 7].map((number, index) => {
              return (
                <div key={index} style={{ display: "table-cell" }}>
                  <Button variant={buttonVariant.CALENDAR} number={number} />
                </div>
              );
            })}
          </div>
          <div className={[space["m-v--4"]].join(" ")}>
            {[8, 9, 10, 11, 12, 13, 14].map((number, index) => {
              return (
                <div key={index} style={{ display: "table-cell" }}>
                  <Button variant={buttonVariant.CALENDAR} number={number} />
                </div>
              );
            })}
          </div>
          <div className={[space["m-v--4"]].join(" ")}>
            {[15, 16, 17, 18, 19, 20, 21].map((number, index) => {
              return (
                <div key={index} style={{ display: "table-cell" }}>
                  <Button variant={buttonVariant.CALENDAR} number={number} />
                </div>
              );
            })}
          </div>
          <div className={[space["m-v--4"]].join(" ")}>
            {[22, 23, 24, 25, 26, 27, 28].map((number, index) => {
              return (
                <div key={index} style={{ display: "table-cell" }}>
                  <Button variant={buttonVariant.CALENDAR} number={number} />
                </div>
              );
            })}
          </div>
          <div className={[space["m-v--4"]].join(" ")}>
            {[29, 30, 31, null, null, null, null].map((number, index) => {
              return (
                <div key={index} style={{ display: "table-cell" }}>
                  {number && (
                    <Button variant={buttonVariant.CALENDAR} number={number} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
