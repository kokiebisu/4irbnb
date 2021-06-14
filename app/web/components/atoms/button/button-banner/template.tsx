export interface BannerButtonTemplateProps {
  title: string;
  onClick: () => void;
}

/**
 * Renders the banner button component
 * @param {string} title - Title of the button
 */
export const BannerButtonTemplate = ({
  title,
  onClick,
}: BannerButtonTemplateProps) => {
  return (
    <button onClick={onClick}>
      <div className="bg-black rounded-lg py-2 px-4 shadow-sm inline-block">
        <h3 className="text-sm font-light text-white">{title}</h3>
      </div>
    </button>
  );
};
