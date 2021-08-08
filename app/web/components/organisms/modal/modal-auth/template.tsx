import { Button, Icon } from "@atoms";
import { useToggleDispatch } from "@context/toggle";
import { useAuthDispatch, useAuthState } from "@context/auth";
import React from "react";
import { Prototype } from "./prototype";

/**
 * Renders the auth modal
 */
export const AuthModalTemplate = (): JSX.Element => {
  const toggleDispatch = useToggleDispatch();
  const authDispatch = useAuthDispatch();
  const authState = useAuthState();

  return (
    <div
      className="grid bg-white rounded-2xl"
      style={{ maxHeight: "90vh", gridTemplateRows: "auto 1fr" }}
    >
      <div
        style={{ height: 60 }}
        className="flex items-center border-b border-gray-200 px-4"
      >
        <div className="relative w-full">
          <div className="absolute left-0 bg-transparent">
            {authState.display === "Forgot password" ? (
              <Button
                variant="modal"
                icon={
                  <Icon
                    variant="stroke"
                    strokeType="close"
                    stroke="black"
                    strokeWidth={3}
                    width={14}
                    height={14}
                  />
                }
                onClick={() => authDispatch({ type: "auth_login" })}
              />
            ) : (
              <Button
                variant="modal"
                icon={
                  <Icon
                    variant="stroke"
                    strokeType="close"
                    stroke="black"
                    strokeWidth={3}
                    width={14}
                    height={14}
                  />
                }
                onClick={() => toggleDispatch({ type: "close_register" })}
              />
            )}
          </div>
          <div className="flex justify-center top-1 relative">
            <h3 className="text-md">{authState.title}</h3>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto">
        <Prototype variant={authState.display} />
      </div>
    </div>
  );
};
