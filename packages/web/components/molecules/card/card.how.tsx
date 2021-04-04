/**
 * Renders the participate card component
 * @param {string} categoryType - Type of participate card
 */
const HowCard: React.FC<{ how?: string }> = ({ how = 'qualified' }) => {
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
  return (
    <div
      style={{ minHeight: 350 }}
      className="h-full p-6 border border-gray-300 rounded"
    >
      <div className="pt-3 pb-6 px-auto flex justify-content">
        <div
          className="w-32 h-28 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${types[how].icon})`,
          }}
        />
      </div>
      <div className="my-3">
        <h3 className="text-base">{types[how].title}</h3>
      </div>
      <div className="mb-3">
        <p className="text-sm">{types[how].description}</p>
      </div>
      {types[how].more && (
        <div>
          <h3 className="text-xs text-green-500">
            <u>{types[how].more}</u>
          </h3>
        </div>
      )}
    </div>
  );
};

export const how = (props) => {
  return {
    how: {
      component: <HowCard {...props} />,
      style: '',
    },
  };
};
