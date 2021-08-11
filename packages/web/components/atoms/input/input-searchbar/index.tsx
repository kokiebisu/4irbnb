import React from "react";
import {
  SearchbarInputTemplate,
  SearchbarInputTemplateProps,
} from "./template";

export type SearchbarInputProps = SearchbarInputTemplateProps;

export const SearchbarInput = (props: SearchbarInputProps): JSX.Element => {
  return <SearchbarInputTemplate {...props} />;
};
