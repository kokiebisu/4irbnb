import { useState } from "react";

/** styles */
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";

/** components */
import { Input } from "@input";

export const PhotosCreate: React.FC<{
  data?: any;
  setData?: any;
  setPreview?: any;
}> = ({ data, setData }) => {
  const [preview, setPreview] = useState([]);
  return (
    <div>
      <div className={[space["m-b--12"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          Liven up your listing with photos
        </h3>
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <p className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          Take photos using a phone or camera. Upload at least one photo to
          publish your listing—you can always add more or edit later.
        </p>
      </div>
      <div className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--8"]].join(" ")}>
          {preview.length > 0 ? (
            <div>
              <div>
                <img src={preview[0]} />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  columnGap: 10,
                }}
                className={[space["m-t--16"]].join(" ")}
              >
                <div>
                  <Input
                    variant="another"
                    handleChange={(e) => {
                      setData({
                        ...data,
                        photo: [...data.photos, e.target.files[0]],
                      });
                      setPreview([
                        ...preview,
                        URL.createObjectURL(e.target.files[0]),
                      ]);
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <Input
              variant="photo"
              handleChange={(e) => {
                setData({
                  ...data,
                  photos: [...data.photos, e.target.files[0]],
                });
                setPreview([
                  ...preview,
                  URL.createObjectURL(e.target.files[0]),
                ]);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
