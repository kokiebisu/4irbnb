/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';

const PhotosCreate: React.FC<{
  data?: any;
  handleFileChange?: (e) => void;
}> = ({ data, handleFileChange = () => alert('File selected') }) => {
  const [preview, setPreview] = useState([]);
  return (
    <div>
      <div css={{ marginBottom: 12 }}>
        <h3 css={{ fontSize: 28, color: 'grey.700' }}>
          Liven up your listing with photos
        </h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 14, color: 'grey.700' }}>
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
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  columnGap: 10,
                  marginTop: 16,
                }}
              >
                <div>
                  <Input
                    variant={$INPUT.ANOTHER}
                    // handleChange={(e) => {
                    //   setData({
                    //     ...data,
                    //     photo: [...data.photos, e.target.files[0]],
                    //   });
                    //   setPreview([
                    //     ...preview,
                    //     URL.createObjectURL(e.target.files[0]),
                    //   ]);
                    // }}
                    handleChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
          ) : (
            <Input
              variant={$INPUT.PHOTO}
              // handleChange={(e) => {
              //   setData({
              //     ...data,
              //     photos: [...data.photos, e.target.files[0]],
              //   });
              //   setPreview([
              //     ...preview,
              //     URL.createObjectURL(e.target.files[0]),
              //   ]);
              // }}
              handleChange={handleFileChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const photos = (props) => {
  return {
    photos: {
      component: <PhotosCreate {...props} />,
      css: {},
    },
  };
};
