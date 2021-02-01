/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";

import {
  Input,
  $Input,
} from "../components/organisms/modal/node_modules/@input";

export const PhotosCreate: React.FC<{
  data?: any;
  setData?: any;
  setPreview?: any;
}> = ({ data, setData }) => {
  const [preview, setPreview] = useState([]);
  return (
    <div>
      <div css={{ marginBottom: 12 }}>
        <h3 css={{ fontSize: 28, color: "gray__2" }}>
          Liven up your listing with photos
        </h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 14, color: "gray__2" }}>
          Take photos using a phone or camera. Upload at least one photo to
          publish your listing—you can always add more or edit later.
        </p>
      </div>
      <div css={{ marginBottom: 30 }}>
        <div css={{ marginBottom: 8 }}>
          {preview.length > 0 ? (
            <div>
              <div>
                <img src={preview[0]} />
              </div>
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  columnGap: 10,
                  marginTop: 16,
                }}
              >
                <div>
                  <Input
                    variant={$Input.ANOTHER}
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
              variant={$Input.PHOTO}
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
