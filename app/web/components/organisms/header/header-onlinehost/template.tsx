import Router from "next/router";
import { Button } from "@atoms";

export const OnlineHostHeaderTemplate = (): JSX.Element => {
  return (
    <header className="h-48 px-0">
      <div className="p-4 h-full">
        <div>
          <Button
            variant="logo"
            noName
            fill="black"
            onClick={() => Router.push("/")}
          />
        </div>
      </div>
    </header>
  );
};
