export interface BannerButtonTemplateProps {
  title?: string;
}

/**
 * Renders the banner button component
 * @param {string} title - Title of the button
 */
export const BannerButtonTemplate: React.FC<BannerButtonTemplateProps> = ({
  title,
}) => {
  return (
    <div className="bg-black rounded-lg py-2 px-4 shadow-sm inline-block">
      <h3 className="text-sm font-light text-white">{title}</h3>
    </div>
  );
};
