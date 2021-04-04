/** styles **/
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";

/**
 * Renders the participate card component
 * @param {string} categoryType - Type of participate card
 */
export const HowCard: React.FC<{ how?: string }> = ({ how = "qualified" }) => {
  const types = {
    qualified: {
      icon:
        "https://a0.muscache.com/airbnb/static/list_your_space/scenarios-meet-guest-eaa389217c2acc8887e3f88cc197f9fe.png",
      title: "Qualified guests find your listing",
      description:
        "Anyone who wants to book with you needs to confirm their contact information, provide payment details, and tell you about their trip.",
    },
    control: {
      icon:
        "https://a0.muscache.com/airbnb/static/list_your_space/ib_settings-0c6e8137f5559822d30e7af88f9d675a.png",
      title: "You control who can book",
      description:
        "To book available dates without having to send a request, guests must agree to your rules and meet all the requirements you set.",
      more: "I want to review every request",
    },
    notified: {
      icon:
        "https://a0.muscache.com/airbnb/static/list_your_space/IB-only-message-illo-66933bcd7dfc0f2172c6a819cf92619e.png",

      title: "Once a guest books, you'll be notified",
      description:
        "You’ll immediately get a confirmation email with information like why they’re coming, when they’re arriving, and who they’re coming with.",
    },
  };
  return (
    <div
      style={{ minHeight: 350 }}
      className={[
        shape["min-h--300"],
        shape["h--full"],
        space["p--22"],
        color["b--white__2"],
        shape["br--6"],
      ].join(" ")}
    >
      <div
        style={{
          padding: "10px auto 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 120,
            height: 100,
            backgroundImage: `url(${types[how].icon})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className={[space["m-v--12"]].join(" ")}>
        <h3 className={[font["size--16"]].join(" ")}>{types[how].title}</h3>
      </div>
      <div className={[space["m-b--12"]].join(" ")}>
        <p className={[font["size--14"]].join(" ")}>{types[how].description}</p>
      </div>
      {types[how].more && (
        <div>
          <h3
            className={[font["size--12"], color["c--darkgreen__3"]].join(" ")}
          >
            <u>{types[how].more}</u>
          </h3>
        </div>
      )}
    </div>
  );
};
