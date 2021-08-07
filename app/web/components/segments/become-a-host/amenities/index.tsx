import { Layout } from "@layout";
import { useAmenitiesSegment } from "./logic";
import { AmenitiesSegmentTemplate } from "./template";

export const AmenitiesSegment: React.FC<{}> = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    ...data
  } = useAmenitiesSegment();

  return (
    <Layout
      variant="create"
      left={<AmenitiesSegmentTemplate {...data} />}
      percentage={25}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
    />
  );
};
