import { Input } from "@atoms";

export interface LocationSegmentTemplateProps {
  country: string;
  postal: string;
  street: string;
  apt: string;
  city: string;
  state: string;
  handleChange: (e, property) => void;
}

/**
 * Renders the /become-a-host/location page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const LocationSegmentTemplate: React.FC<LocationSegmentTemplateProps> = ({
  country,
  postal,
  street,
  apt,
  city,
  state,
  handleChange,
}) => {
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-xl text-gray-700">Where's your place located?</h3>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">
          Guests will only get your exact address once they've booked a
          reservation.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5 mb-4">
        <div className="mb-3">
          <div className="mb-3">
            <p className="text-sm">Country</p>
          </div>
          <Input
            variant="select"
            onChange={(e) => handleChange(e, "country")}
            value={country}
            inputType="country"
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <p className="text-sm">Postal Code</p>
          </div>
          <Input
            name="postal"
            variant="text"
            onChange={(e) => handleChange(e, "postal")}
            value={postal}
          />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-3">
          <p className="text-sm">Street</p>
        </div>
        <div>
          <Input
            name="street"
            variant="text"
            onChange={(e) => handleChange(e, "street")}
            value={street}
          />
        </div>
        <div className="mt-1">
          <p className="text-xs">e.g. 111108 108th Avenue</p>
        </div>
      </div>
      <div className="mb-3">
        <div className="mb-3">
          <p className="text-sm">Apt, Suite (optional)</p>
        </div>
        <div>
          <Input
            name="apt"
            variant="text"
            onChange={(e) => setData({ ...data, apt: e.target.value })}
            value={apt}
          />
        </div>
        <div className="mt-1">
          <p className="text-xs">e.g. Suite #7</p>
        </div>
      </div>
      <div className="mt-5 mb-3 grid grid-cols-2 gap-x-5">
        <div className="mb-3">
          <div className="mb-3">
            <p className="text-sm">City</p>
          </div>
          <div>
            <Input
              variant="text"
              onChange={(e) => handleChange(e, "city")}
              value={city}
              // inputType="city"
            />
          </div>
          <div className="mt-1">
            <p className="text-xs">e.g. Edmonton</p>
          </div>
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <p className="text-sm">State</p>
          </div>
          <div>
            <Input
              name="state"
              variant="text"
              onChange={(e) => handleChange(e, "state")}
              value={state}
            />
          </div>
          <div className="mt-1">
            <p className="text-xs">e.g. Alberta</p>
          </div>
        </div>
      </div>
    </div>
  );
};
