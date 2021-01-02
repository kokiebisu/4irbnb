import React from "react";

/** styles **/
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import responsive from "@styles/responsive.module.scss";

/** components */
import { Header } from "@header/header.component";
import { Template } from "@template/host/homes";
import { Footer } from "@footer/footer.component";

/** hooks */
import { useTabTitle } from "@hooks/useTabTitle";

/**
 * Renders the component for path /host/homes
 */
const Homes: () => string | JSX.Element = () => {
  useTabTitle("Host your home on Airbnb");

  const hosts = [
    {
      name: "Darrel",
      stayType: "tiny house",
      location: "Atlanta",
      imgUrl:
        "https://a0.muscache.com/im/pictures/92acd468-73bf-4ca1-a956-277c4a94b3a3.jpg?im_q=highq&im_w=960",
    },
    {
      name: "Candida & Jeff",
      stayType: "House",
      location: "Joshua Tree",
      imgUrl:
        "https://a0.muscache.com/im/pictures/8a09fe60-64e5-4461-bb80-aaf8bc3238a7.jpg?im_q=highq&im_w=960",
    },
    {
      name: "Ryo",
      stayType: "farm stay",
      location: "Komatsu",
      imgUrl:
        "https://a0.muscache.com/im/pictures/d95dc425-2606-4727-9a2b-861709479fb9.jpg?im_q=highq&im_w=960",
    },
    {
      name: "Sophie",
      stayType: "loft",
      location: "Paris",
      imgUrl:
        "https://a0.muscache.com/im/pictures/17d27522-7f79-4a82-9225-74c737800641.jpg?im_q=highq&im_w=960",
    },
    {
      name: "Nancy",
      stayType: "private room",
      location: "San Francisco",
      imgUrl:
        "https://a0.muscache.com/im/pictures/e4ad8c8e-ccf9-473c-856b-0b3c5dfe0662.jpg?im_q=highq&im_w=960",
    },
  ];

  const allItems = [
    {
      name: "Houses",
      imgUrl:
        "https://a0.muscache.com/im/pictures/ccef24a3-d378-48c7-ad1a-ee83d313fef5.jpg?im_q=highq&im_w=320",
    },
    {
      name: "Tiny houses",
      imgUrl:
        "https://a0.muscache.com/im/pictures/8bbcea0d-05d5-4f26-953a-77cf80f1c5ee.jpg?im_q=highq&im_w=320",
    },
    {
      name: "Guesthouses",
      imgUrl:
        "https://a0.muscache.com/im/pictures/1385145a-0d2d-43fa-b6c5-6c21944e723c.jpg?im_q=highq&im_w=320",
    },
    {
      name: "Bed and breakfasts",
      imgUrl:
        "https://a0.muscache.com/im/pictures/812d72a8-2c76-4dc5-ba51-239d59d1ff5a.jpg?im_q=highq&im_w=320",
    },
    {
      name: "Apartments",
      imgUrl:
        "https://a0.muscache.com/im/pictures/1976f418-6b52-4c24-a77f-f7ee2211e0ed.jpg?im_q=highq&im_w=320",
    },
    {
      name: "Boutique hotels",
      imgUrl:
        "https://a0.muscache.com/im/pictures/980c9ff9-3e32-4f93-9771-bd39b20b27f4.jpg?im_q=highq&im_w=320",
    },
  ];

  return (
    <div>
      <div className={[responsive["n_to_b--md"]].join(" ")}>
        <Header variant="homes" />
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <Template
          variant="community"
          hosts={hosts}
          title="Host your home on Airbnb"
        />
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant="all" items={allItems} />
        </div>
      </div>
      <div className={[space["p-v--64"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant="priority" />
        </div>
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant="help" />
        </div>
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant="ready" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homes;
