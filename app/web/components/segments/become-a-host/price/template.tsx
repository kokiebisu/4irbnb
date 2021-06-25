import { Input } from '@atoms';

export interface PriceSegmentTemplateProps {
  basePrice?: number;
  handleChange?: (e: any, property: string) => void;
}

export const PriceSegmentTemplate: React.FC<PriceSegmentTemplateProps> = ({
  basePrice,
  handleChange,
}) => {
  return (
    <div>
      <div className="mb-6">
        <div className="mb-4">
          <h3 className="text-xl text-gray-700">Price your space</h3>
        </div>
        <div className="mb-4">
          <div>
            <h3 className="text-sm">Increase your chances of getting booked</h3>
          </div>
          <div>
            <h4 className="text-sm">
              Set up Smart Pricing to automativally keep your nightly prices
              competitive as demand in your area changes.
            </h4>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex items-center">
            <div className="mr-3">
              <h2 className="text-md">
                Set up the same base price for each night
              </h2>
            </div>
            <div className="p-1 text-xs bg-gray-300">
              <h3 className="text-xs">RECOMMENDED</h3>
            </div>
          </div>
          <div>
            <p className="text-sm">
              A 14% guest service fee is added to every host's price--but
              sometimes the amount will vary, depending on the length of the
              trip.
            </p>
          </div>
          <div>
            <p className="text-sm text-green-700">Learn what fees pay for</p>
          </div>
        </div>
        <div className="mb-5">
          <div>
            <h3 className="text-sm">Base price</h3>
          </div>
          <div className="mb-3">
            <p className="text-sm">This will be your default price.</p>
          </div>
          <div>
            <Input
              variant="price"
              title="Base price"
              subtitle="This will be your default price gor days when you decide to turn off Smart Pricing."
              tip={17}
              name="basePrice"
              value={basePrice}
              handleChange={(e) => handleChange(e, 'basePrice')}
            />
          </div>
          <div className="my-3">
            <h4 className="text-green-8 text-md">Tip: $21</h4>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <h3 className="text-sm">Currency</h3>
          </div>
          <div>
            <Input variant="select" inputType="currency" />
          </div>
        </div>
      </div>
    </div>
  );
};
