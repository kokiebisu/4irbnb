import { Input } from "@atoms";

export interface PhotosSegmentTemplateProps {
  preview: string[];
  handlePhotosChange: (e: any) => void;
}

export const PhotosSegmentTemplate: React.FC<PhotosSegmentTemplateProps> = ({
  preview,
  handlePhotosChange,
}) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg text-gray-700">
          Liven up your listing with photos
        </h3>
      </div>
      <div className="mb-7">
        <p className="text-sm text-gray-500">
          Take photos using a phone or camera. Upload at least one photo to
          publish your listing—you can always add more or edit later.
        </p>
      </div>
      <div className="mb-6">
        <div className="mb-3">
          {preview.length > 0 ? (
            <div>
              <div>
                <img src={preview[0]} />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-x-3">
                <div>
                  <Input variant="another" onChange={handlePhotosChange} />
                </div>
              </div>
            </div>
          ) : (
            <Input variant="photo" onChange={handlePhotosChange} />
          )}
        </div>
      </div>
    </div>
  );
};
