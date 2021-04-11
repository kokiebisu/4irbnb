import { Icon, $Icon } from '@icons';

export interface AnotherInputProps {
  onChange?: (e: any) => void;
}

/**
 * Renders the text input component
 * @param {function} onChange - handles key press event
 */
export const AnotherInput: React.FC<AnotherInputProps> = ({ onChange }) => {
  return (
    <div className="h-96 p-7 border border-dashed border-gray-300">
      <form className="h-full">
        <input
          type="file"
          id="upload"
          style={{ display: 'none' }}
          onChange={onChange}
        />
        <label htmlFor="upload" className="h-full">
          <div className="h-full cursor-pointer">
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div>
                    <div>
                      <div className="flex items-center">
                        <Icon
                          variant={$Icon.SEMANTIC}
                          semanticType="plus"
                          width={45}
                          fill="#D8D8D8"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-300 whitespace-nowrap">
                      Add another
                    </h4>
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
