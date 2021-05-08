import { Modal } from '@modal';
import { Header } from '@header';

export interface BannerSegmentTemplateProps {}

export const BannerSegmentTemplate: React.FC<BannerSegmentTemplateProps> = () => {
  return (
    <div className="pb-8" style={{ backgroundColor: '#F2ECE2' }}>
      <div>
        <Header variant="homes" />
      </div>
      <div className="flex container-spread">
        <div className="flex items-center w-1/2">
          <div>
            <div>
              <div className="my-7">
                <h2 className="text-md tracking-wide">SEE WHAT'S POSSIBLE</h2>
              </div>
            </div>
            <div>
              <h2 className="text-2xl">
                Share your passion for hospitality--become a host
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <Modal variant="listing" />
        </div>
      </div>
    </div>
  );
};
