export const useHowCard = ({ how }) => {
  const types = {
    qualified: {
      icon:
        'https://a0.muscache.com/airbnb/static/list_your_space/scenarios-meet-guest-eaa389217c2acc8887e3f88cc197f9fe.png',
      title: 'Qualified guests find your listing',
      description:
        'Anyone who wants to book with you needs to confirm their contact information, provide payment details, and tell you about their trip.',
    },
    control: {
      icon:
        'https://a0.muscache.com/airbnb/static/list_your_space/ib_settings-0c6e8137f5559822d30e7af88f9d675a.png',
      title: 'You control who can book',
      description:
        'To book available dates without having to send a request, guests must agree to your rules and meet all the requirements you set.',
      more: 'I want to review every request',
    },
    notified: {
      icon:
        'https://a0.muscache.com/airbnb/static/list_your_space/IB-only-message-illo-66933bcd7dfc0f2172c6a819cf92619e.png',

      title: "Once a guest books, you'll be notified",
      description:
        'You’ll immediately get a confirmation email with information like why they’re coming, when they’re arriving, and who they’re coming with.',
    },
  };

  return {
    icon: types[how].icon,
    title: types[how].title,
    description: types[how].description,
    more: types[how].more,
  };
};
