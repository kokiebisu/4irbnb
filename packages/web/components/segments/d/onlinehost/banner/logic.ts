export const useBannerSegment = () => {
  const items = [
    {
      icon: "home" as const,
      title: "Host from home",
      description: "Share your expertise and a window to your world",
    },
    {
      icon: "general" as const,
      title: "Meet global guests",
      description: "Make the world feel a little smaller and a lot friendlier.",
    },
    {
      icon: "lightening" as const,
      title: "Build a business",
      description:
        "Earn money doing something you love with support from Airbnb.",
    },
  ];
  return { items } as {
    items: {
      icon: any;
      title: string;
      description: string;
    }[];
  };
};
