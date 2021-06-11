import { Button } from '@button';
import { Input } from '@input';
import { Icon } from 'components/atoms/icon';

export interface ListingModalTemplateProps {}

export const ListingModalTemplate: React.FC<ListingModalTemplateProps> = () => {
  return (
    <div>
      <div className="mb-6">
        <h4 className="text-lg">
          To get started, tell us more about your place
        </h4>
      </div>
      <div>
        <Input variant="address" direction="bottom" />
        <Input variant="place" />
        <Input variant="guests" direction="top" />
      </div>
      <div className="mt-4 mb-7 flex items-center">
        <div>
          <Icon
            variant="semantic"
            semanticType="plus"
            width={15}
            height={15}
            fill="black"
          />
        </div>
        <div>
          <h3 className="text-sm">
            Let us know any special spaces guests can access
          </h3>
        </div>
      </div>
      <div>
        <Button
          variant="primary"
          fill="black"
          block
          title="Start your listing"
          stretch
        />
      </div>
    </div>
  );
};
