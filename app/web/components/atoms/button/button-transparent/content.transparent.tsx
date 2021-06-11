import { Icon } from 'components/atoms/icon';

export const Content: React.FC<{ kind?: string; inverse?: boolean }> = ({
  kind,
  inverse,
}) => {
  const kinds = {
    globe: (
      <>
        <div className="items-center mr-2">
          <Icon
            variant="general"
            generalType="globe"
            width={16}
            fill={inverse ? 'white' : '#363636'}
          />
        </div>
      </>
    ),
    host: (
      <h3 className={`text-sm ${inverse ? 'text-white' : 'text-gray-800'}`}>
        Become a host
      </h3>
    ),
  };
  return kinds[kind];
};
