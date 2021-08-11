export type CollectionCardTemplateProps = {
  label?: string;
  imgUrl?: string;
  paddingTop?: number;
};

export const CollectionCardTemplate = ({
  label = "Wellness in the New Year",
  imgUrl = "https://a0.muscache.com/im/pictures/67494b8d-129d-493b-94e7-6141b2b454e3.jpg?im_w=720",
  paddingTop = 66,
}: CollectionCardTemplateProps): JSX.Element => {
  return (
    <div style={{ paddingTop: `${paddingTop}%`, position: "relative" }}>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="h-full w-full relative">
          <div
            className="h-full w-full rounded-md z-10 bg-cover"
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 z-30">
            <div className="relative h-full w-full p-4 flex flex-col justify-between">
              <div>
                <div className="mb-1">
                  <p className="text-white text-xs">Collection</p>
                </div>
                <div style={{ maxWidth: 200 }}>
                  <h3 className="text-white text-lg">{label}</h3>
                </div>
              </div>
              <div>
                <button>
                  <div className="rounded-md px-6 py-3 bg-white">
                    <h3 className="text-sm">Show all</h3>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
