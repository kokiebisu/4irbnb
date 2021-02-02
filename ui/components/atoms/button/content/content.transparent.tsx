/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { ChevronDown, Globe } from "@svg/regular";

export const Content: React.FC<{ kind?: string; inverse?: boolean }> = ({
  kind = "globe",
  inverse = false,
}) => {
  const kinds = {
    globe: (
      <>
        <div
          css={{
            alignItems: "center",
            marginRight: 8,
          }}
        >
          <Globe width={16} fill={inverse ? "white" : "#363636"} />
        </div>
      </>
    ),
    host: (
      <h3
        css={{
          fontSize: 14,
        }}
        sx={{
          ...(inverse ? { color: "c--white" } : { color: "gray__4" }),
        }}
      >
        Become a host
      </h3>
    ),
  };
  return kinds[kind];
};
