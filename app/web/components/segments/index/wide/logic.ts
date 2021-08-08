import { useRouter } from "next/router";

export const useWideSegment = () => {
  const router = useRouter();
  const handleRedirectToHostPage = () => router.push("/host/homes");

  const title = "The Greatest Outdoors";
  const description = "Wishlists curated by Airbnb.";
  const bannerImg =
    "https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440";
  return {
    handleRedirectToHostPage,
    title,
    description,
    bannerImg,
  };
};
