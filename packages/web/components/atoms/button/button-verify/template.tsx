export type VerifyButtonTemplateProps = {
  onClick: () => void;
};

export const VerifyButtonTemplate = ({
  onClick,
}: VerifyButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="verify-button"
      className="inline-block"
      onClick={onClick}
    >
      <div>
        <h3 className="text-green-700 font-light">Verify</h3>
      </div>
    </button>
  );
};
