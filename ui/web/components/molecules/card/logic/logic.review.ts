export const renderDescription = (description: string) => {
  return `${description.split(" ").slice(0, 30).join(" ")}...`;
};
