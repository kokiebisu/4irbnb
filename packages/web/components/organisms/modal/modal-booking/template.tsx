import { Button } from "@atoms";

export type BookingModalTemplateProps = {
  availables: any;
  handleBookSelect: () => void;
  handleMoreDatesSelect: () => void;
};

/**
 * Renders the booking modal
 * @param {Object[]} availables - Lists all the available dates
 */
export const BookingModalTemplate = ({
  availables = [
    {
      date: "Tue., Nov. 10",
      from: "1:00 a.m. ",
      to: "3:00 a.m. ",
      standard: "PST",
      price: 31,
    },
    {
      date: "Tue., Nov. 10",
      from: "1:00 a.m. ",
      to: "3:00 a.m. ",
      standard: "PST",
      price: 31,
    },
    {
      date: "Tue., Nov. 10",
      from: "1:00 a.m. ",
      to: "3:00 a.m. ",
      standard: "PST",
      price: 31,
    },
  ],
  handleBookSelect,
  handleMoreDatesSelect,
}: BookingModalTemplateProps): JSX.Element => {
  const displayingAvailables = [...availables].splice(0, 3);
  return (
    <div>
      <div>
        <div>
          <div>
            <span className="py-3 text-lg">
              <b className="font-medium py-3 text-lg">From $31</b>
            </span>
            <span> /person</span>
          </div>
          <div>
            <u className="text-sm font-thin text-gray-600">Show all prices</u>
          </div>
        </div>
        <div>input</div>
        <div>
          {displayingAvailables.map((available, index) => {
            return (
              <div key={index} className="lg:flex justify-between mt-4">
                <div>
                  <div className="mb-2">
                    <h3 className="text-md">{available.date}</h3>
                  </div>
                  <div>
                    <p className="text-sm">
                      {available.from} - {available.to} {available.standard}
                    </p>
                  </div>
                  <div>
                    <u className="text-sm">Book for a private group</u>
                  </div>
                </div>
                <div>
                  <div className="my-1">
                    <span className="text-sm">
                      <b>${available.price}</b>
                    </span>
                    <span className="text-sm"> /person</span>
                  </div>
                  <div>
                    <Button
                      variant="primary"
                      size="sm"
                      title="Choose"
                      stretch
                      color="black"
                      onClick={handleBookSelect}
                      fill="black"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <div>
            <Button
              variant="border"
              size="md"
              title="See more dates"
              stretch
              onClick={handleMoreDatesSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
