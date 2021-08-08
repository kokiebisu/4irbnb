import { Layout } from "@layout";
import { usePhotosSegment } from "./logic";
import { PhotosSegmentTemplate } from "./template";

export const PhotosSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    ...data
  } = usePhotosSegment();

  return (
    <Layout
      variant="create"
      title="Photos"
      left={<PhotosSegmentTemplate {...data} />}
      percentage={35}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
    />
  );
};
