export const Properties: { name: string; description: string }[] = [
  {
    name: "Boutique hotel",
    description:
      "Professional hospitality businesses that usually have a unique style or theme defining their brand and decor",
  },
  {
    name: "Aparthotel",
    description:
      "Hotel-like accommodations with rooms that feel more like apartments and amenities similar to a hotel, including a front desk",
  },
  {
    name: "Heritage hotel (India)",
    description:
      "Historically significant buildings in India like palaces, havelis, and forts that have been converted into professionally managed accommodations",
  },
  {
    name: "Hostel",
    description:
      "Professional hospitality businesses that usually rent beds in shared dorms and private rooms for guests",
  },
  {
    name: "Hotel",
    description:
      "Professional hospitality businesses that offer accommodations like private rooms, suites, or unique stays for guests",
  },
  {
    name: "Nature lodge",
    description:
      "Professional hospitality businesses located in natural settings like forests and mountains",
  },
  {
    name: "Resort",
    description:
      "Professional hospitality businesses with accommodations ranging from hotel rooms to private rentals often with more services and amenities than hotels",
  },
  {
    name: "Serviced apartment",
    description:
      "Apartments that offer hotel-like amenities, such as daily cleaning and a front desk, furnished and serviced by professional management companies",
  },
  {
    name: "Kezhan (China)",
    description:
      "Small and medium-sized places to stay with local characteristics, offering sophisticated amenities, toiletries, simple dining, social spaces, and custom-tailored services.",
  },
];

export const Options = Properties.map((option, index) => {
  return <option value={option.name}>{option.name}</option>;
});
