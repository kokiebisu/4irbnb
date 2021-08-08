export const useHorizontalCard = () => {
  const renderType = (card: { type: string }) => {
    if (card.type === "camper_rv") {
      return "Camper/RV";
    }
    return card.type;
  };

  return { renderType };
};
