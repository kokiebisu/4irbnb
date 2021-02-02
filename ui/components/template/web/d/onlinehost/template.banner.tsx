/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, $Button } from "@button/web";
import { Bullet, $Bullet } from "@bullet/web";

export const BannerTemplate: React.FC<{}> = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div css={{ margin: "16px 0" }}>
        <h3 css={{ fontSize: 11, color: "gray__2" }}>AIRBNB EXPERIENCES</h3>
      </div>
      <div css={{ marginBottom: 16 }}>
        <h2 css={{ fontSize: 47 }}>Host an online experience</h2>
      </div>
      <div css={{ margin: "16px 0", width: 600, textAlign: "center" }}>
        <h4 css={{ fontSize: 20, color: "gray__1" }}>
          Join a commmunity of hosts bringing the world together in a whole new
          way.
        </h4>
      </div>
      <div css={{ margin: "40px 0" }}>
        <Button variant={$Button.PRIMARY} title="Get started" />
      </div>
      <div css={{ margin: "32px 0" }}>
        <img
          src="https://a0.muscache.com/pictures/4bab4990-eda1-4b94-996e-0940464575b7.jpg"
          alt="banner image"
        />
      </div>
      <div
        css={{
          margin: "45px 0",
          width: 550,
          textAlign: "center",
        }}
      >
        <h4 css={{ fontSize: 20, color: "gray__1" }}>
          Airbnb Experiences are engaging activities designed by locals that go
          beyond the typical tour or class. And now you can host them for
          anyone, from anywhere.
        </h4>
      </div>
      <div
        css={{
          margin: "16px 0",
          display: ["block", "block", "block", "grid"],
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: 20,
        }}
      >
        {["home", "global", "business"].map((type, index) => {
          return (
            <div key={index} css={{ marginBottom: 16 }}>
              <Bullet variant={$Bullet.ONLINEHOST} type={type} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
