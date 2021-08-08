import { Button, Input, Icon } from "@atoms";

export const ListingModalTemplate = () => {
  return (
    <div>
      <div className="mb-6">
        <h4 className="text-lg">
          To get started, tell us more about your place
        </h4>
      </div>
      <div>
        <Input
          onChange={() => alert("cloci")}
          variant="address"
          direction="bottom"
        />
        <Input
          value={""}
          variant="place"
          onChange={() => console.log("change")}
        />
        <Input
          onChange={() => console.log("oncahnge")}
          value="sdaf"
          variant="guests"
          direction="top"
          errors={false}
        />
      </div>
      <div className="mt-4 mb-7 flex items-center">
        <div>
          <Icon
            variant="fill"
            fillType="plus"
            width={15}
            height={15}
            fill="black"
          />
        </div>
        <div>
          <h3 className="text-sm">
            Let us know any special spaces guests can access
          </h3>
        </div>
      </div>
      <div>
        <Button
          variant="primary"
          fill="black"
          title="Start your listing"
          stretch
          size="md"
          color="black"
          onClick={() => alert("clicked")}
        />
      </div>
    </div>
  );
};
