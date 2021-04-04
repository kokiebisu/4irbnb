export const renderType = (card) => {
  if (card.type === "camper_rv") {
    return "Camper/RV";
  }
  return card.type;
};
