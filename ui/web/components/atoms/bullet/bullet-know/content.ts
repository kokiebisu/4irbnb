export const useKnowBulletContent = ({ knowType, checkin, checkout }) => {
  const knowTypes = {
    checkin: {
      icon: { variant: 'stay', stayType: 'clock' },
      description: `Check-in: ${checkin.min}–${checkin.max}`,
    },
    checkout: {
      icon: { variant: 'stay', stayType: 'clock' },
      description: `Checkout: ${checkout}`,
    },
    self: {
      icon: { variant: 'stay', stayType: 'checkin' },
      description: 'Self check-in with lockbox',
    },
    children: {
      icon: { variant: 'stay', stayType: 'children' },
      description: 'Not suitable for children and infants',
    },
    smoking: {
      icon: { variant: 'stay', stayType: 'smoking' },
      description: 'No smoking',
    },
    pets: {
      icon: { variant: 'stay', stayType: 'pets' },
      description: 'No pets',
    },
    parties: {
      icon: { variant: 'stay', stayType: 'parties' },
      description: 'No parties or events',
    },
    cleaning: {
      icon: { variant: 'stay', stayType: 'cleaning' },
      description: "Committed to Airbnb's enhanced cleaning process.",
    },
    distancing: {
      icon: { variant: 'stay', stayType: 'distancing' },
      description:
        "Airbnb's social-distancing and other COVID-19-related guidelines apply",
    },
    caution: {
      icon: { variant: 'stay', stayType: 'caution' },
      description: 'Nearby lake, river, other body of water',
    },
    check: {
      icon: { variant: 'stay', stayType: 'checkin' },
      description: 'Carbon monoxide alarm',
    },
  };

  return { ...knowTypes[knowType] };
};
