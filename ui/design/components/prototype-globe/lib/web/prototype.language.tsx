/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, $Button } from "@nextbnb/atoms-button";

const Layout: React.FC<{
  items?: { language?: string; region?: string }[];
  type?: string;
}> = ({ items, type = "suggested" }) => {
  const titles = {
    suggested: "Suggested languages and regions",
    choose: "Choose a language and region",
  };
  return (
    <div>
      <div css={{ marginBottom: 18 }}>
        <h3 css={{ fontSize: 20 }}>{titles[type]}</h3>
      </div>
      <div
        css={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          columnGap: 15,
          rowGap: 15,
          padding: 10,
        }}
      >
        {items.map(({ language, region }, index) => {
          return (
            <div key={index}>
              <Button
                variant={$Button.GLOBE}
                language={language}
                region={region}
                extendsTo={{ textAlign: "left" }}
                block
                selected={index === 0 && type === "choose"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const LanguagePrototype: React.FC<{}> = () => {
  return (
    <div>
      {/* <div className={[space["m-b--24"]].join(" ")}>
        <Layout
          type="suggested"
          items={[{ language: "English", region: "Canada" }]}
        />
      </div> */}
      <div>
        <Layout
          type="choose"
          items={[{ language: "English", region: "Canada" }]}
        />
      </div>
    </div>
  );
};
