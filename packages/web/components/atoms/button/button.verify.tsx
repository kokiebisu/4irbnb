const VerifyButton = () => {
  return (
    <div>
      <h3 className="text-green-700 font-light">Verify</h3>
    </div>
  );
};

export const verify = (props) => {
  return {
    verify: {
      component: <VerifyButton {...props} />,
      style: '',
    },
  };
};
