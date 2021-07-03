export interface CovidBarTemplateProps {}

/**
 *
 * @returns
 */
export const CovidBarTemplate: React.FC<CovidBarTemplateProps> = () => {
  return (
    <aside className="text-sm bg-black text-center py-4 px-6 z-50">
      <a href="">
        <p className="text-xs text-white">
          <u>Get the latest on our COVID-19 response</u>
        </p>
      </a>
    </aside>
  );
};
