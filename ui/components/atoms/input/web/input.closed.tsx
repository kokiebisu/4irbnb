/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, $Button } from "../../button/web";

export const ClosedInput: React.FC<{
  title?: string;
  data?: { value: boolean };
  selected?: true;
  value?: string;
  setData?: any;
}> = ({
  title = "Title here",
  data = { value: false },
  selected = false,
  setData,
  value = "",
}) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h4 css={{ fontSize: 15 }}>{title}</h4>
      </div>
      <div css={{ display: "flex" }}>
        <div css={{ marginRight: 12 }}>
          <Button
            variant={$Button.CLOSED}
            content="close"
            onClick={() => setData({ ...data, [value]: false })}
            selected={data.value === false}
          />
        </div>
        <div>
          <Button
            variant={$Button.CLOSED}
            content="check"
            onClick={() => setData({ ...data, [value]: true })}
            selected={data.value === true}
          />
        </div>
      </div>
    </div>
  );
};
