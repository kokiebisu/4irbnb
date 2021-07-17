import { Animation } from "@animation";
import { stretchMixin } from "../utils/mixin";
import { usePrimaryButtonTemplate } from "./use-template";

export type PrimaryButtonTemplateProps = {
  title: string;
  size: "sm" | "md" | "lg";
  fill?: string;
  color: string;
  bg?: string;
  loading?: boolean;
  disabled?: boolean;
  stretch?: boolean;
  onClick: () => void;
};

/**
 * Renders the primary button component
 * @param {string} title - Title of the button
 * @param {string} size - Size of the button
 * @param {string} fill - Any custom color you want to add
 * @param {boolean} loading - Show the loading animation if true
 * @param {boolean} disabled - Shows gray appearance and disabled users from pressing
 */
export const PrimaryButtonTemplate = ({
  title,
  size,
  fill,
  loading,
  disabled,
  color,
  stretch,
  onClick,
}: PrimaryButtonTemplateProps): JSX.Element => {
  const { commonStyle, sizeStyle, bgColor } = usePrimaryButtonTemplate({
    size,
    fill,
    disabled,
  });
  return (
    <button
      data-testid="primary-button"
      className={`inline-block ${stretchMixin(stretch)}`}
      onClick={onClick}
    >
      <div
        style={{ backgroundColor: !disabled ? fill : undefined }}
        className={`text-center ${commonStyle} ${sizeStyle} ${bgColor}`}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Animation variant="loading" />
          </div>
        ) : (
          <div>
            <h4 className={`h-6 text-${color}`}>{title}</h4>
          </div>
        )}
      </div>
    </button>
  );
};
