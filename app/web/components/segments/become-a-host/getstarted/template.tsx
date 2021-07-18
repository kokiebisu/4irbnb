import { Button } from "@atoms";
import { Input } from "@atoms";

export interface GetStartedSegmentTemplateProps {
  loading?: boolean;
  handleLoadingChange?: () => void;
  stay?: string;
  handleStayChange?: () => void;
  handleSubmit?: () => void;
  guests?: number;
  address?: string;
  handleChange?: (e: any) => void;
  handlePlaceChange?: (e: any) => void;
  handleContinueSelect: () => void;
}

/**
 * Renders the /become-a-host/get-started page content
 */
export const GetStartedSegmentTemplate = ({
  loading,
  guests,
  address,
  stay,
  handleChange,
  handleSubmit,
  handlePlaceChange,
  handleContinueSelect,
}: GetStartedSegmentTemplateProps): JSX.Element => {
  return (
    <div>
      <div>
        <div className="my-5">
          <h4 className="text-xl text-gray-700">
            Hi, Kenichi! Let's get started listing your space.
          </h4>
        </div>
        <div className="my-3">
          <h3 className="text-xs text-gray-600">STEP 1</h3>
        </div>
        <div className="mb-4">
          <h4 className="text-lg text-gray-500">
            What kind of place do you have?
          </h4>
        </div>
        <div className="mb-3">
          <form onSubmit={handleSubmit}>
            <div
              className="mb-3 grid gap-3"
              style={{
                gridTemplateColumns: "1fr 130px",
              }}
            >
              <div>
                <Input
                  variant="place"
                  value={stay}
                  // changePlace={handlePlaceChange}
                />
              </div>
              <div>
                <Input
                  variant="guests"
                  // handleChange={handleChange}
                  value={guests}
                />
              </div>
            </div>
            <div>
              <Input
                variant="address"
                // handleChange={handleChange}
                value={address}
              />
            </div>
            <div className="mt-4" style={{ width: 150 }}>
              <div className="w-full">
                <Button
                  variant="primary"
                  title="Continue"
                  size="sm"
                  loading={loading}
                  color="white"
                  onClick={handleContinueSelect}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
