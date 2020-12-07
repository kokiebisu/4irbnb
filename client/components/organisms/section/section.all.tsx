import React from "react";

/** components */
import { Card } from "../../molecules/card/card.component";

/** props */
import { AllSectionProps } from "./props";

/** layouts */
import { Layout } from "../../../layout/layout.component";

/**
 * Renders the All section
 */
export const AllSection: React.FC<AllSectionProps> = () => {
  const stayTypes = [
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
    <Layout
      type="section"
      sectionType="homes"
      title="From castles to condos, guests book it all"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          columnGap: 25,
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
        }}
      >
        {stayTypes.map((stayType, index) => {
          return (
            <div key={index} style={{ scrollSnapAlign: "start" }}>
              <Card
                type="category"
                imgUrl={stayType.imgUrl}
                title={stayType.name}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
