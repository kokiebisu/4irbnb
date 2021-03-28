import space from "@styles/space.module.scss";

import { Layout } from "@layout";

import { Bullet, $Bullet } from "@bullet";

export const BackTemplate: React.FC<{
  back?: string;
}> = () => {
  return (
    <Layout
      variant="onlinehost"
      title="We've got your back"
      subtitle="You’re not alone—you'll have access to educational tools and opportunities to help you grow as a host and entrepreneur."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: 20,
        }}
        className={[space["m-v--32"]].join(" ")}
      >
        {["resources", "events", "community"].map((type, index) => {
          return (
            <div key={index} className={[space["m-b--16"]].join(" ")}>
              <Bullet variant={$Bullet.ONLINEHOST} type={type} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
