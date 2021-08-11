import { Input } from "@atoms";

export const GuestsModalTemplate = (): JSX.Element => {
  return (
    <div>
      <div>
        <Input
          variant="counter"
          // type="guests"
          title="Adults"
          subtitle="Ages 13 or above"
          onAdd={() => alert("clicked")}
          onSubtract={() => alert("clicked")}
          min={3}
          max={3}
        />
      </div>
      <div style={{ height: 1, width: "100%", backgroundColor: "#EBEBEB" }} />
      <div>
        <Input
          variant="counter"
          title="Children"
          subtitle="Ages 2 - 12"
          onAdd={() => alert("clicked")}
          onSubtract={() => alert("clicked")}
          min={3}
          max={3}
        />
      </div>
      <div style={{ height: 1, width: "100%", backgroundColor: "#EBEBEB" }} />
      <div>
        <Input
          variant="counter"
          title="Infants"
          subtitle="Under 2"
          onAdd={() => alert("clicked")}
          onSubtract={() => alert("clicked")}
          min={3}
          max={3}
        />
      </div>
    </div>
  );
};
