import { $Icon, Icon } from '@icons';

/**
 * Renders the know bullet
 * @param {string} categoryType - Type of know bullet
 * @param {Object[]} checkin - Time range for checkin
 * @param {string} checkout - Time for checkin
 */
const KnowBullet: React.FC<{
  categoryType?: string;
  checkin?: any;
  checkout?: string;
}> = ({
  categoryType = 'checkin',
  checkin = { min: '3:00 p.m.', max: '12:00 a.m.' },
  checkout = '11:00 a.m.',
}) => {
  const categories = {
    checkin: {
      icon: <Icon variant={$Icon.STAY} stayType="clock" width={14} />,
      description: `Check-in: ${checkin.min}–${checkin.max}`,
    },
    checkout: {
      icon: <Icon variant={$Icon.STAY} stayType="clock" width={14} />,
      description: `Checkout: ${checkout}`,
    },
    self: {
      icon: <Icon variant={$Icon.STAY} stayType="checkin" width={14} />,
      description: 'Self check-in with lockbox',
    },
    children: {
      icon: <Icon variant={$Icon.STAY} stayType="children" width={14} />,
      description: 'Not suitable for children and infants',
    },
    smoking: {
      icon: <Icon variant={$Icon.STAY} stayType="smoking" width={14} />,
      description: 'No smoking',
    },
    pets: {
      icon: <Icon variant={$Icon.STAY} stayType="pets" width={14} />,
      description: 'No pets',
    },
    parties: {
      icon: <Icon variant={$Icon.STAY} stayType="parties" width={14} />,
      description: 'No parties or events',
    },
    cleaning: {
      icon: <Icon variant={$Icon.STAY} stayType="cleaning" width={14} />,
      description: "Committed to Airbnb's enhanced cleaning process.",
    },
    distancing: {
      icon: <Icon variant={$Icon.STAY} stayType="distancing" width={14} />,
      description:
        "Airbnb's social-distancing and other COVID-19-related guidelines apply",
    },
    caution: {
      icon: <Icon variant={$Icon.STAY} stayType="caution" width={14} />,
      description: 'Nearby lake, river, other body of water',
    },
    check: {
      icon: <Icon variant={$Icon.STAY} stayType="checkin" width={14} />,
      description: 'Carbon monoxide alarm',
    },
  };
  return (
    <div className="flex">
      <div className="mr-3">{categories[categoryType].icon}</div>
      <div>
        <p className="font-thin text-base">
          {categories[categoryType].description}
        </p>
      </div>
    </div>
  );
};

export const know = (props) => {
  return {
    know: { component: <KnowBullet {...props} /> },
  };
};
