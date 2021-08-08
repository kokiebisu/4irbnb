export interface SpacesSegmentTemplateProps {
  spaces?: { title: string; item: string }[];
  selectedSpaces?: string[];
  handleChange?: (property: string, item: any) => void;
}

/**
 * Renders the /become-a-host/spaces page content
 */
export const SpacesSegmentTemplate: React.FC<SpacesSegmentTemplateProps> = (
  {
    // spaces,
    // selectedSpaces,
    // handleChange,
  }
) => {
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-xl text-gray-700">What spaces can guests use?</h3>
      </div>
      <div className="mb-7">
        <p className="text-md text-gray-500">
          Include common areas, but don’t add spaces that aren’t on your
          property.
        </p>
      </div>
      <div className="mb-7">
        {/* {spaces
          ? spaces.map(({ title, item }, index) => {
              return (
                <div key={index} className="mb-4">
                  <Input
                    onChange={() => handleChange("spaces", item)}
                    value={selectedSpaces.includes(item)}
                    variant="checkbox"
                    title={title}
                  />
                </div>
              );
            })
          : null} */}
      </div>
    </div>
  );
};
