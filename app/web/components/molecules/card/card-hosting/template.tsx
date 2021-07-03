export interface HostingCardTemplateProps {
  imgUrl?: string;
  title?: string;
  description?: string;
}

export const HostingCardTemplate: React.FC<HostingCardTemplateProps> = ({
  imgUrl,
  title,
  description,
}) => {
  return (
    <div className="sm:w-64 w-full">
      <div className="">
        {imgUrl ? (
          <div
            style={{
              height: 160,
            }}
          >
            <img src={imgUrl} className="object-cover rounded-md" />
          </div>
        ) : (
          <div
            className="animate-pulse bg-gray-500 rounded-md"
            style={{
              width: 260,
              height: 160,
            }}
          />
        )}
      </div>
      <div className="my-4">
        <h2 className="text-xl">{title || 'Title here'}</h2>
      </div>
      <div>
        <h4 className="tracking-wide text-base">
          {description ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        </h4>
      </div>
      <div className="my-4">
        <u className="text-sm">Learn more</u>
      </div>
    </div>
  );
};
