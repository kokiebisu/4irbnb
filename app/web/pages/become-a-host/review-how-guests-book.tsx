import Router from "next/router";
import { Bar } from "@bar";
import { Header } from "@header";
import { Card, $Card } from "@card";
import { Icon } from "components/atoms/icon";

const HowGuestsWillBookPage = () => {
  const proceed = () => {
    setTimeout(() => {
      Router.push("/become-a-host/checkin");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/house-rules");
    }, 500);
  };
  return (
    <div>
      <div style={{ position: "sticky", zIndex: 9999, top: 0 }}>
        <div>
          <Header variant="stay" title="Booking settings" />
        </div>
        <div>
          <Bar variant="progress" percentage={80} />
        </div>
      </div>
      <div style={{ padding: "50px 0" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ marginBottom: 25 }}>
            <h3>Here's how guests will book with you</h3>
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: 15,
            }}
          >
            {["qualified", "control", "notified"].map((how, index) => (
              <div key={index}>
                <Card variant="how" how={how} />
              </div>
            ))}
          </div>
          <div className="my-7">
            <div className="mb-4">
              <h3 className="text-sm text-gray-700">
                You're protected throughout
              </h3>
            </div>
            <div className="flex">
              <div className="mr-6">
                <Icon
                  variant="others"
                  othersType="protected"
                  width={50}
                  height={50}
                />
              </div>
              <div style={{ width: "65%" }}>
                <h3 className="text-sm text-gray-500">
                  In the rare case there are issues, Airbnb has you covered with
                  24/7 customer support, a $1,000,000 CAD Host Guarantee, and
                  completely penalty-free cancellations if you’re uncomfortable
                  with a reservation.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-white w-full fixed bottom-0 z-60 flex justify-center sm:justify-end">
            <div className="w-full my-0 mx-auto max-w-[700px]">
              <Bar
                variant="create"
                handleNextPage={proceed}
                handlePreviousPage={revert}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowGuestsWillBookPage;
