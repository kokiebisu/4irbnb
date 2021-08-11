import { Bullet } from "@atoms";
import { Button } from "@atoms";
import { Input } from "@atoms";

export type ExistsPrototypeTemplateProps = {
  data: {
    imgUrl: string;
    firstname: string;
    email: string;
  };
  handleSubmit: (e: any) => void;
  handlePasswordChange: (e: any) => void;
  password: string;
  passwordErrors: string;
  loading: boolean;
  handleLoading: (state: boolean) => void;
};

export const ExistsPrototypeTemplate: React.FC<ExistsPrototypeTemplateProps> = ({
  data = {
    imgUrl: "https://a0.muscache.com/defaults/user_pic-225x225.png?v=3",
    firstname: "Kenichi",
    email: "a01056715@gmail.com",
  },
  handleSubmit,
  handlePasswordChange,
  password,
  passwordErrors,
  loading,
  handleLoading,
}) => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <div className="my-4">
          <p className="text-sm text-center">
            Looks like you already have an account. Please log in instead.
          </p>
        </div>
        <div className="my-4">
          <img
            style={{ width: 120 }}
            className="rounded-full"
            src={data.imgUrl}
          />
        </div>
        <div className="my-2">
          <div>
            <p className="text-sm text-center">{data.firstname}</p>
          </div>
          <div>
            <p className="text-sm text-center">{data.email}</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <Input
            variant="password"
            onChange={handlePasswordChange}
            value={password}
            errors={!!passwordErrors}
          />
        </div>
        <div className="my-4">
          <Button
            variant="primary"
            loading={loading}
            title="Log in"
            size="md"
            color="white"
            stretch
            fill="black"
            onClick={() => handleLoading(!loading)}
          />
        </div>
        <div>
          {!!passwordErrors && (
            <div className="mt-2">
              <Bullet variant="required" message={passwordErrors} />
            </div>
          )}
        </div>
      </form>
      <div className="my-4">
        <Button
          variant="underline"
          title="Login with a different account"
          onClick={() => alert("button pressed")}
          font={14}
        />
      </div>
      <div className="my-4">
        <Button
          variant="underline"
          title="Forgot password?"
          onClick={() => alert("button pressed")}
          font={14}
        />
      </div>
    </div>
  );
};
