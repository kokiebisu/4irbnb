import Link from "next/link";

/** styles */
import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";

/** vectors */
import { ChevronRight } from "@svg/regular";

/**
 * Renders the expand button
 * @param {string} to - Redirects to the path being specified
 * @param {string} title - Title of the button
 */
export const ExpandButton: React.FC<{ to?: string; title?: string }> = ({
  to = "/",
  title = "Button",
}) => {
  return (
    <div data-testid="button">
      <Link href={to}>
        <a className={[font["weight--500"]].join(" ")}>
          <div className={[layout["items-center"]].join(" ")}>
            <div>
              <u>{title}</u>
            </div>
            <div>
              <ChevronRight width={14} stroke="black" strokeWidth={5} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
