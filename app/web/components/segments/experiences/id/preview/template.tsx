import { Icon } from "@atoms";
import { Panel, $Panel } from "@panel";

export interface PreviewSegmentTemplateProps {
  images?: string[];
}

/**
 * Renders the panel section
 * @param {string[]} images - Images for the panel
 */
export const PreviewSegmentTemplate: React.FC<PreviewSegmentTemplateProps> = ({
  images,
}) => {
  return (
    <div>
      <div className="relative z-100 my-5 flex items-center justify-between">
        <div>
          <u className="text-sm font-thin">All online experiences</u>
        </div>

        <div className="hidden md:inline-block">
          <div className="pr-2 flex items-center">
            <a href="#" className="flex pl-2 items-center">
              <div>
                <Icon
                  variant="fill"
                  fillType="share"
                  width={16}
                  height={16}
                  fill="#484848"
                />
              </div>
              <p className="pl-3 text-sm text-gray-700">
                <u>Share</u>
              </p>
            </a>
            <a className="flex ml-3 items-center">
              <div>
                <Icon
                  variant="fill"
                  fillType="heart"
                  fill="#484848"
                  width={16}
                  height={16}
                />
              </div>
              <u className="pl-3 text-sm text-gray-700">Save</u>
            </a>
          </div>
        </div>
      </div>
      <div>
        <Panel images={images} variant={$Panel.EXPERIENCE} />
      </div>
    </div>
  );
};
