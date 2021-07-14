import { Button } from "@atoms";

export type AvailableCardTemplateProps = {
  date?: string;
  from?: string;
  to?: string;
  standard?: string;
  price?: number;
};

/**
 * Renders the available card component
 * @param {string} date - The date which the experience is available
 * @param {string} from - The time which the experience starts
 * @param {string} to - The time which the experience ends
 * @param {string} standard - The time standard
 * @param {number} price - The price of the experience
 */
export const AvailableCardTemplate = ({
  date,
  from,
  to,
  standard,
  price,
}: AvailableCardTemplateProps): JSX.Element => {
  return (
    <div className="p-6 border boder-gray-300 rounded-md">
      <div className="mb-2">
        <h3 className="text-sm">{date}</h3>
      </div>
      <div>
        <p className="text-sm">
          {from} - {to} {standard}
        </p>
      </div>
      <div className="my-2">
        <u className="text-sm">Book for a private group</u>
      </div>
      <div className="my-2">
        <span className="text-sm">
          <b>${price}</b>
        </span>
        <span className="text-sm"> /person</span>
      </div>
      <div className="inline-block">
        <Button variant="primary" size="sm" title="Choose" color="white" />
      </div>
    </div>
  );
};
