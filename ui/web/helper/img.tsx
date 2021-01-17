export const ResponsiveImage: React.FC<{
  largeImg?: string;
  mediumImg?: string;
  smallImg?: string;
  styling: any;
}> = ({
  largeImg = "https://a0.muscache.com/im/pictures/f0483d09-7d13-42d0-a40a-46d585c42220.jpg",
  mediumImg = "https://a0.muscache.com/im/pictures/1fe846d6-f32b-4928-8016-035964af42fa.jpg",
  smallImg = "https://a0.muscache.com/im/pictures/8d160e0d-7043-4438-b946-0785bccb6b39.jpg",
  styling,
}) => {
  return (
    <picture>
      <source
        srcSet={`${largeImg}?im_w=1440 1x, ${largeImg}?im_w=1920 2x`}
        media="(min-width:960px)"
      ></source>
      <source
        srcSet={`${mediumImg}?im_w=720 1x, ${mediumImg}?im_w=1440 2x`}
        media="(min-width:720px)"
      ></source>
      <source
        srcSet={`${smallImg}?im_w=320 1x, ${smallImg}?im_w=720 2x`}
        media="(min-width:320px)"
      ></source>
      <img
        style={{
          ...styling,
          objectFit: "cover",
        }}
        src={`${smallImg}?im_q=highq&im_w=720`}
        alt="background"
      ></img>
    </picture>
  );
};
