import { Icon } from "@atoms";

export type SearchbarInputTemplateProps = {
  inverse?: boolean;
  value?: string;
  onChange?: (e: any) => void;
};

export const SearchbarInputTemplate = ({
  inverse,
  value,
  onChange,
}: SearchbarInputTemplateProps): JSX.Element => {
  return (
    <div
      className={`${
        inverse
          ? "border border-gray-300 bg-gray-100"
          : "shadow-md border border-transparent"
      } text-gray-700 rounded-full py-3 pl-6 pr-12 flex items-center`}
    >
      <div className="mr-4">
        <Icon
          variant="stroke"
          strokeType="magnifyGlass"
          width={15}
          height={15}
          stroke="black"
          strokeWidth={4}
        />
      </div>
      <div className="font-thin text-md tracking-wide text-gray-400">
        <input value={value} onChange={onChange} placeholder="Search stays" />
      </div>
    </div>
  );
};
