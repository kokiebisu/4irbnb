import { Bar } from "@bar";
import { Header } from "@header";

import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import responsive from "@styles/responsive.module.scss";

import * as $bar from "@bar/variants";

export const CreateLayout: React.FC<{
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  next?: () => void;
  back?: () => void;
  percentage?: number;
  criteria?: boolean;
}> = ({
  title = "Property and guests",
  left,
  right,
  next,
  back,
  criteria = false,
  percentage,
}) => {
  return (
    <div>
      <div style={{ position: "sticky", zIndex: 9999, top: 0 }}>
        <div>
          <Header variant="stay" title={title} />
        </div>
        <div>
          <Bar variant={$bar.PROGRESS} percentage={percentage} />
        </div>
      </div>
      <div
        className={[layout["flex"]].join(" ")}
        style={{ overflowY: "auto", minHeight: "calc(100vh - 75px)" }}
      >
        <div
          className={[
            responsive["w100p_to_55p--xs"],
            layout["flex"],
            layout["justify-end"],
          ].join(" ")}
        >
          <div
            className={[responsive["full_to_maxw550--xs"]].join(" ")}
            style={{
              paddingBottom: 100,
            }}
          >
            <div className={[space["p-t--64"], space["p-h--32"]].join(" ")}>
              <div style={{ zIndex: 1 }}>{left}</div>
            </div>
          </div>
          <div
            className={[
              responsive["maxw100p_to_55p--xs"],
              responsive["justify--center_to_end--xs"],
            ].join(" ")}
            style={{
              backgroundColor: "white",
              width: "100%",
              position: "fixed",
              bottom: 0,
              zIndex: 60,
              display: "flex",
            }}
          >
            <div
              style={{ width: "100%", maxWidth: 550 }}
              className={[space["p-h--32"]].join(" ")}
            >
              <Bar
                variant={$bar.CREATE}
                next={next}
                back={back}
                criteria={criteria}
              />
            </div>
          </div>
        </div>
        <div
          className={[responsive["n_to_b--xs"]].join(" ")}
          style={{ width: "45%", backgroundColor: "#FAFAFA" }}
        >
          {right}
        </div>
      </div>
    </div>
  );
};
