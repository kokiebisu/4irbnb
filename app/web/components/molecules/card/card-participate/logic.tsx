import { Icon } from "@atoms";

export const useParticipateCard = ({
  categoryType,
}: {
  categoryType: "call" | "private" | "request";
}) => {
  const types: {
    [key: string]: {
      icon: JSX.Element;
      title: string;
      description: string;
      more?: string;
    };
  } = {
    call: {
      icon: (
        <Icon
          variant="fill"
          fillType="computer"
          width={32}
          height={32}
          fill="black"
        />
      ),
      title: "Join a video call",
      description:
        "Download Zoom for free on a desktop or mobile device. After you book, you’ll receive an email with a link and details on how to join.",
      more: "Show more",
    },
    private: {
      icon: (
        <Icon
          variant="fill"
          fillType="people"
          width={32}
          height={32}
          fill="black"
        />
      ),
      title: "Book a private group",
      description:
        "Cici can host private groups of any size, up to 100 guests. Private group rates start at $340.",
    },
    request: {
      icon: (
        <Icon
          variant="fill"
          fillType="calendar"
          width={32}
          height={32}
          fill="black"
        />
      ),
      title: "Request availability",
      description:
        "Can’t find a date that works? Cici can schedule and customize an experience based on your preferences.",
      more: "Contact Cici",
    },
  };

  return {
    icon: types[categoryType].icon,
    title: types[categoryType].title,
    description: types[categoryType].description,
    ...(types[categoryType].more && { more: types[categoryType].more }),
  };
};
