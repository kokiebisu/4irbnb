export interface VerifyButtonProps {}

export const VerifyButton: React.FC<VerifyButtonProps> = () => {
  return (
    <div>
      <h3 className="text-green-700 font-light">Verify</h3>
    </div>
  );
};

export const verify = (props) => {
  return {
    verify: <VerifyButton {...props} />,
  };
};
