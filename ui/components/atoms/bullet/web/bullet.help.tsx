/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  Analytics,
  CustomerService,
  Education,
  ToolBox,
} from "../../../public/svg/original";

/**
 * Renders the help bullet
 * @param {string} help - Type of help bullet
 */
export const HelpBullet: React.FC<{
  help?: "support" | "tools" | "insights" | "education";
}> = ({ help = "support" }) => {
  const helps: {
    [type: string]: { icon: JSX.Element; title: string; description: string };
  } = {
    support: {
      icon: <CustomerService width={28} />,
      title: "24/7 customer support",
      description:
        "From setting up your listing to concerns about guests, our global team is here to support you by phone, email, and chat, every step of the way.",
    },
    tools: {
      icon: <ToolBox width={28} />,
      title: "Tools to help you succeed",
      description:
        "Our tools make it easy to set the right prices, manage reservations, message with guests, receive payments, track earnings, and more.",
    },
    insights: {
      icon: <Analytics width={28} />,
      title: "Personalized insights",
      description:
        "We'll share local travel trends and suggest ways to improve to help you earn great reviews and grow your business.",
    },
    education: {
      icon: <Education width={28} />,
      title: "Education and training",
      description:
        "Find guidance in the Resource Centre, join a free webinar on hosting basics, and connect with other hosts in our Community Centre.",
    },
  };
  return (
    <div css={{ display: "flex" }}>
      <div css={{ marginRight: 16 }}>{helps[help].icon}</div>
      <div>
        <div css={{ marginBottom: 6 }}>
          <h3>{helps[help].title}</h3>
        </div>
        <div>
          <h4 css={{ fontSize: 16, lineHeight: 1.5 }}>
            {helps[help].description}
          </h4>
        </div>
      </div>
    </div>
  );
};
