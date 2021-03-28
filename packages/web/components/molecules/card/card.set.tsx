import { Check } from '@svg/original';

export const SetCard: React.FC<{}> = () => {
  return (
    <div className="rounded-md border border-gray-300">
      <div className="w-full border-tr-lg h-3 bg-green-400" />
      <div className="p-6">
        <div className="flex">
          <div className="mr-3">
            <Check width={18} fill="#268A04" />
          </div>
          <div>
            <div className="mb-1">
              <h3 className="text-base">You're all set!</h3>
            </div>
            <div>
              <p className="text-sm text-gray-300">
                This helps us keep your account secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
