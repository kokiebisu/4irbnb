/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Bar, $Bar } from "@bar/web";
import { Header, $Header } from "@header/web";

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
      <div css={{ position: "sticky", zIndex: 9999, top: 0 }}>
        <div>
          <Header variant={$Header.STAY} title={title} />
        </div>
        <div>
          <Bar variant={$Bar.PROGRESS} percentage={percentage} />
        </div>
      </div>
      <div
        css={{
          display: "flex",
          overflowY: "auto",
          minHeight: "calc(100vh - 75px)",
        }}
      >
        <div
          css={{
            width: ["100%", "55%"],
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            css={{
              maxWidth: ["100%", "550px"],
              paddingBottom: 100,
            }}
          >
            <div css={{ paddingTop: 64, paddingLeft: 32, paddingRight: 32 }}>
              <div css={{ zIndex: 1 }}>{left}</div>
            </div>
          </div>
          <div
            css={{
              display: "flex",
              backgroundColor: "white",
              width: "100%",
              position: "fixed",
              bottom: 0,
              zIndex: 60,
            }}
            sx={{
              maxWidth: ["100%", "55%"],
              justifyContent: ["center", "flex-end"],
            }}
          >
            <div css={{ width: "100%", maxWidth: 550, padding: "0 32px" }}>
              <Bar
                variant={$Bar.CREATE}
                next={next}
                back={back}
                criteria={criteria}
              />
            </div>
          </div>
        </div>
        <div
          css={{ width: "45%", backgroundColor: "#FAFAFA" }}
          sx={{ display: ["none", "block"] }}
        >
          {right}
        </div>
      </div>
    </div>
  );
};
