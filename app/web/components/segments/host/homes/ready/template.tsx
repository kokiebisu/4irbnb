import Router from 'next/router';
import { Button } from '@atoms';

export interface ReadySegmentTemplateProps {}

/**
 * Renders the ready section
 */
export const ReadySegmentTemplate: React.FC<ReadySegmentTemplateProps> = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <h1 className="text-2xl">Ready to host?</h1>
      </div>
      <div className="w-1/2">
        <div className="mb-6">
          <h4 className="text-lg">
            Create a listing that fits your hosting style—we'll give you tips to
            make your place shine. Start now and finish any time.
          </h4>
        </div>
        <div className="inline-block">
          <Button
            variant="primary"
            size="md"
            title="Get started"
            onClick={() => Router.push('/become-a-host')}
          />
        </div>
      </div>
    </div>
  );
};
