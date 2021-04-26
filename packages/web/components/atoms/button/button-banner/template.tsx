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
    <div className="bg-white rounded text-m py-2 px-3 shadow-sm inline-block">
      <h3 className="text-sm">{title}</h3>
    </div>
  );
};
