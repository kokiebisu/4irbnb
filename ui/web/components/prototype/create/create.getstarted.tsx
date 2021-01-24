import { useEffect, useState } from "react";
import { useFormik } from "formik";
import Router from "next/router";

import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

import { Button } from "@button";
import { Input } from "@input";

import { useStayDispatch } from "@context/stay";

import * as buttonVariant from "@button/variants";

/**
 * Renders the /become-a-host/get-started page content
 */
export const GetStartedCreate: React.FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const [stay, setStay] = useState("Entire place");
  const dispatchStay = useStayDispatch();
  const formik = useFormik({
    initialValues: {
      guests: 1,
      address: "",
    },
    onSubmit: async ({ guests, address }) => {
      setLoading(true);
      dispatchStay({
        type: "add",
        payload: { stay, guests, address },
      });
      setTimeout(() => {
        Router.push("/become-a-host/room");
      }, 2000);
    },
  });

  useEffect(() => {
    dispatchStay({
      type: "reset",
      payload: { place: "Entire place", guests: 0, address: "" },
    });
  }, []);

  return (
    <div>
      <div>
        <div className={[space["m-v--24"]].join(" ")}>
          <h4 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
            Hi, Kenichi! Let's get started listing your space.
          </h4>
        </div>
        <div className={[space["m-v--8"]].join(" ")}>
          <h3 className={[font["size--12"], color["c--gray__1"]].join(" ")}>
            STEP 1
          </h3>
        </div>
        <div className={[space["m-b--16"]].join(" ")}>
          <h4 className={[font["size--22"], color["c--gray__2"]].join(" ")}>
            What kind of place do you have?
          </h4>
        </div>
        <div className={[space["m-b--10"]].join(" ")}>
          <form onSubmit={formik.handleSubmit}>
            <div
              className={[space["m-b--10"]].join(" ")}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 130px",
                columnGap: 10,
              }}
            >
              <div>
                <Input variant="place" value={stay} changePlace={setStay} />
              </div>
              <div>
                <Input
                  variant="guests"
                  handleChange={formik.handleChange}
                  value={formik.values.guests}
                />
              </div>
            </div>
            <div>
              <Input
                variant="address"
                handleChange={formik.handleChange}
                value={formik.values.address}
              />
            </div>
            <div
              className={[space["m-t--16"]].join(" ")}
              style={{ width: 150 }}
            >
              <div style={{ width: "100%" }}>
                <Button
                  variant={buttonVariant.PRIMARY}
                  title="Continue"
                  size="sm"
                  loading={loading}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
