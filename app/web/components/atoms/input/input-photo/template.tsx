import { Icon } from "@atoms";

export type PhotoInputTemplateProps = {
  onChange?: (e: any) => void;
};

/**
 * Renders the text input component
 * @param {function} onChange - handles key press event
 */
export const PhotoInputTemplate = ({
  onChange,
}: PhotoInputTemplateProps): JSX.Element => {
  return (
    <div style={{ height: 350 }}>
      <form className="h-full">
        <input
          type="file"
          id="upload"
          className="h-full hidden"
          onChange={onChange}
        />
        <label htmlFor="upload" className="h-full">
          <div className="h-full cursor-pointer p-4 border border-gray-200 border-dashed">
            <div className="relative w-full h-full bg-input-upload">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="py-4 px-5 bg-red-400 rounded">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <Icon variant="action" actionType="upload" width={20} />
                    </div>
                    <div>
                      <h3 className="text-sm whitespace-nowrap text-white">
                        Upload Photos
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </form>
    </div>
  );
};
