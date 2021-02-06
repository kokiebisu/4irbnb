/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, $Button } from "atoms/button/web";

export const CreateBar: React.FC<{
  next?: () => void;
  back?: () => void;
  criteria?: boolean;
}> = ({
  next = () => alert("next button pressed"),
  back = () => alert("back button pressed"),
  criteria = true,
}) => {
  return (
    <div
      css={{ width: "100%", padding: "16px 0" }}
      sx={{ borderTop: "1px solid", borderColor: "white__1" }}
    >
      <div
        css={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button variant={$Button.BACK} onClick={back} />
        </div>
        <div>
          <Button
            variant={$Button.PRIMARY}
            title="Next"
            size="md"
            fill="#018489"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};
