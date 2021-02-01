/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, $Button } from "../../../atoms/button/web";
import { Input, $Input } from "../../../atoms/input/web";
import { Plus } from "../../../public/svg/original";

export const ListingModal: React.FC<{}> = () => {
  return (
    <div>
      <div css={{ marginBottom: 24 }}>
        <h4 css={{ fontSize: 16 }}>
          To get started, tell us more about your place
        </h4>
      </div>
      <div>
        <Input variant={$Input.ADDRESS} direction="bottom" />
        <Input variant={$Input.PLACE} direction="middle" />
        <Input variant={$Input.GUESTS} direction="top" />
      </div>
      <div
        css={{
          marginTop: 20,
          marginBottom: 45,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <Plus width={15} height={15} fill="black" />
        </div>
        <div>
          <h3 css={{ fontSize: 14 }}>
            Let us know any special spaces guests can access
          </h3>
        </div>
      </div>
      <div>
        <Button
          variant={$Button.PRIMARY}
          fill="black"
          block
          title="Start your listing"
        />
      </div>
    </div>
  );
};
