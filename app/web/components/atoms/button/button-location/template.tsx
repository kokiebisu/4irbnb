export type LocationButtonTemplateProps = {
  locationType: 'explore' | 'recent';
  location?: string;
  from?: string;
  to?: string;
  guests?: number;
};

/**
 * Renders the Location Button component
 * @param type
 * @param location
 * @param from
 * @param to
 */
export const LocationButtonTemplate: React.FC<LocationButtonTemplateProps> = ({
  locationType,
  location,
  from,
  to,
  guests,
}) => {
  const types = {
    explore: {
      icon: (
        <img
          className="block rounded w-10 h-10"
          src="https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq"
        />
      ),
      title: 'Explore nearby destinations',
    },
    recent: {
      icon: <div className="block rounded w-full h-full" />,
      title: `${location} · Stays`,
    },
  };

  return (
    <div className="flex items-center py-3">
      <div className="mr-6">
        <div>{types[locationType].icon}</div>
      </div>
      <div>
        <div>
          <h4 className="text-left text-sm">{types[locationType].title}</h4>
        </div>
        {locationType === 'recent' && (
          <div>
            <h4 className="text-left text-xs text-gray-500">
              {from ? from : ''}
              {to ? ` - ${to}` : ''}
              {guests
                ? guests > 0
                  ? ` · ${guests} guests`
                  : ` · ${guests} guest`
                : ''}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};
