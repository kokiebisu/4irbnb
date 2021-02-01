/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

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
      style={{ minHeight: 300, height: "100%", padding: 22, borderRadius: 6 }}
      sx={{ border: "1px solid white__2" }}
    >
      <div
        css={{
          padding: "10px auto 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          css={{
            width: 120,
            height: 100,
            backgroundImage: `url(${types[how].icon})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div css={{ margin: "12px 0" }}>
        <h3 css={{ fontSize: 16 }}>{types[how].title}</h3>
      </div>
      <div css={{ marginBottom: 12 }}>
        <p css={{ fontSize: 14 }}>{types[how].description}</p>
      </div>
      {types[how].more && (
        <div>
          <h3 css={{ fontSize: 12 }} sx={{ color: "darkgreen__3" }}>
            <u>{types[how].more}</u>
          </h3>
        </div>
      )}
    </div>
  );
};
