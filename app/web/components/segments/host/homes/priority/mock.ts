export const priorities: {
  icon: any;
  title: string;
  description: string;
  link: string;
  onClick: () => void;
}[] = [
  {
    icon: "protection" as const,
    title: "Host insurance and protection",
    description:
      "To support you in the rare event of an incident, each booking on AIrbnb includes property damae protection of up to $1M USD and liability insurance of up to $1M USD.",
    link: "How you're protected while hosting",
    onClick: () => alert("clicked"),
  },
  {
    icon: "guidance" as const,
    title: "COVID-19 safety guidance and support",
    description:
      "To help protect the health of our community, we’ve partnered with experts to create safety practices for everyone, plus a cleaning process for hosts.",
    link: "Explore the enhanced cleaning process",
    onClick: () => alert("clicked"),
  },
  {
    icon: "requirements" as const,
    title: "Requirements for all guests",
    description:
      "To give hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behaviour.",
    link: "Steps we take to help hosts feel confident",
    onClick: () => alert("clicked"),
  },
];
