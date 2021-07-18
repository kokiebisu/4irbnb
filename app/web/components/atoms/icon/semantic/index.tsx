import { SemanticIconTemplate, SemanticIconTemplateProps } from "./template";

export type SemanticIconProps = SemanticIconTemplateProps & {
  width: number;
  height: number;
};

export const SemanticIcon = ({
  width,
  height,
  ...props
}: SemanticIconProps): JSX.Element => {
  return (
    <div data-testid="semantic-icon" style={{ height, width }}>
      <SemanticIconTemplate {...props} />
    </div>
  );
};

export type SemanticTypeVariants =
  | { semanticType: "exclamation" }
  | { semanticType: "warning" }
  | { semanticType: "minus" }
  | { semanticType: "plus" }
  | { semanticType: "check" }
  | { semanticType: "saved" };
