import React, { useState } from "react";

/** styles */
import header from "@header/header.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";

/** vectors */
import { MagnifyGlass } from "@svg/original";
import { Button } from "@button/button.component";

/**
 * Renders the Searchbar
 */
export const SearchBar: React.FC<{}> = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={[shape["shadow--sm"]].join(" ")}
      style={{
        border: "1px solid lightgray",
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr",
        borderRadius: 50,
        backgroundColor: "white",
        padding: 15,
      }}
    >
      <div>yo</div>
      <div>yo</div>
      <div>yo</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>yo</div>
        <div>
          <div>
            <Button
              variant="search"
              onClick={() => setExpand(!expand)}
              expand={expand}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
