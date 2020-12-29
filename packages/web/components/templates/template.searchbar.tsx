import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import { useToggleState } from "@context/toggle";

/** components */
import { Bar } from "@organisms/bar/bar.component";
import { Modal } from "@organisms/modal/modal.component";

export const SearchbarTemplate: React.FC<{
  selected?: any;
  setSelected?: any;
  category?: any;
  setCategory?: any;
  transparent?: boolean;
}> = ({ selected, setSelected, category, setCategory, transparent }) => {
  const toggleState = useToggleState();

  return (
    <div>
      <Bar
        variant="search"
        selected={selected}
        setSelected={setSelected}
        category={category}
        setCategory={setCategory}
        extendsTo={[space["p-h--12"]].join(" ")}
        transparent={transparent}
      />
      <div
        style={{
          position: "absolute",
          top: 110,
          left: 0,
          zIndex: 80,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Modal
          variant="location"
          dispatch="toggle_location"
          extendsTo={[shape["w--full"]].join(" ")}
          criteria={toggleState.location}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 110,
          left: 0,
          zIndex: 80,
          width: "100%",
          maxWidth: 720,
        }}
      >
        <Modal
          variant="check"
          dispatch="toggle_check"
          extendsTo={[shape["w--full"]].join(" ")}
          criteria={toggleState.check}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 110,
          right: 0,
          zIndex: 80,
          width: "100%",
          maxWidth: 325,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Modal
          variant="guests"
          dispatch="toggle_guests"
          extendsTo={[shape["w--full"]].join(" ")}
          criteria={toggleState.guests}
        />
      </div>
    </div>
  );
};
