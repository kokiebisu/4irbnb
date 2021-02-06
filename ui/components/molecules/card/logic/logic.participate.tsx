import { Calendar, Computer, People } from "../../../public/svg/original";
import React from "react";

export const getParticipateContent = () => {
  const types = {
    call: {
      icon: <Computer width={32} />,
      title: "Join a video call",
      description:
        "Download Zoom for free on a desktop or mobile device. After you book, you’ll receive an email with a link and details on how to join.",
      more: "Show more",
    },
    private: {
      icon: <People width={32} />,
      title: "Book a private group",
      description:
        "Cici can host private groups of any size, up to 100 guests. Private group rates start at $340.",
    },
    request: {
      icon: <Calendar width={32} />,
      title: "Request availability",
      description:
        "Can’t find a date that works? Cici can schedule and customize an experience based on your preferences.",
      more: "Contact Cici",
    },
  };

  return types;
};
