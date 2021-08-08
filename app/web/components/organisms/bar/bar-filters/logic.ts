import * as content from "./content";

export const useFiltersBar = () => {
  const handleFilterSelect = (filter: string) => alert(filter);
  return {
    ...content,
    handleFilterSelect,
  };
};
