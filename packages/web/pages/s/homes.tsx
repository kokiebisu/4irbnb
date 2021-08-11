import { useRouter } from "next/router";
import { useToggleState } from "@context/toggle";
// import { Prototype } from "@prototype/homes";
// import { Modal } from "@modal";
import { useTabTitle } from "@hooks/useTabTitle";
import "../../global/string";
// import { CategoryPrototypeStayTypeVariants } from "@prototype/homes/prototype-homes-category/template";

/**
 * Renders the component for path /s/homes
 */
const Homes = () => {
  const router = useRouter();
  const {
    // type,
    city = "City",
  }: // stayType,
  {
    type?: string;
    city?: string;
    stayType?: string;
  } = router.query;
  const toggleState = useToggleState();
  useTabTitle(`${city.capitalize()} · Stays · Airbnb`);
  return (
    <div className="md:flex">
      <div className="w-full md:w-[840px]">
        {/* <Prototype
          variant={type}
          city={city}
          stayType={stayType as CategoryPrototypeStayTypeVariants}
        /> */}
        <div
          className="hidden md:block absolute bg-gray-600 overflow-hidden h-full top-0 bottom-0 right-0 left-auto"
          style={{
            width: "calc(100% - 840px)",
          }}
        >
          map
        </div>
        {toggleState.auth && (
          <div className="fixed top-0 bottom-0 left-0 right-0 z-60 bg-blur">
            <div className="flex justify-center items-center h-screen">
              {/* <Modal variant="menu" animate="slideup" /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homes;
