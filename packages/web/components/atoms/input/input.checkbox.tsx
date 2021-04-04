/** styles */
import color from '@styles/color.module.scss';
import shape from '@styles/shape.module.scss';
import space from '@styles/space.module.scss';
import layout from '@styles/layout.module.scss';
import font from '@styles/font.module.scss';

/** vectors */
import { CheckPlain } from '@svg/original';

export const CheckboxInput: React.FC<{
  check?: () => void;
  checked?: boolean;
  title?: string;
  description?: string;
}> = ({ check, checked = true, title = 'Title here', description }) => {
  return (
    <div className="flex items-center">
      <div className="mr-5">
        <div
          onClick={check}
          style={{ cursor: 'pointer', height: 24, width: 24 }}
          className={`flex items-center justify-center border  rounded ${
            checked
              ? 'bg-black border-transparent'
              : 'bg-white border-gray-400 '
          }`}
        >
          <div className="relative border-none">
            <CheckPlain width={15} stroke="white" strokeWidth={5} />
          </div>
        </div>
      </div>
      <div className="relative">
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <h4 className="text-sm text-gray-300">{description}</h4>
        </div>
      </div>
    </div>
  );
};
