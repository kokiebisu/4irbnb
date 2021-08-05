import { Icon } from "@atoms";

export type AgainCardTemplateProps = {};

export const AgainCardTemplate = (): JSX.Element => {
  return (
    <div className="rounded-lg border border-gray-300">
      <div className="p-4">
        <div className="flex">
          <div className="mr-3">
            <div className="p-2 rounded-full bg-red-600">
              <Icon
                variant="stroke"
                strokeType="exclamation"
                width={18}
                height={18}
                stroke="white"
                strokeWidth={3}
              />
            </div>
          </div>
          <div>
            <div className="mb-1">
              <h3 className="text-base">Let's try that again</h3>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                There isn’t an account associated with this email address.
                Please try another email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
