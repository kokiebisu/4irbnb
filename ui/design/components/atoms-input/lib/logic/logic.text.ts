// import color from "layout/web/modal/node_modules/@styles/color.module.scss";
// import shape from "@styles/shape.module.scss";

export const renderShape = (direction: string) => {
  switch (direction) {
    case "top":
      return {};
    // return [
    //   color["b-b--white__3"],
    //   color["b-l--white__3"],
    //   color["b-r--white__3"],
    //   shape["bbr--8"],
    // ].join(" ");
    case "bottom":
      return {};
    // return [
    //   color["b-t--white__3"],
    //   color["b-l--white__3"],
    //   color["b-r--white__3"],
    //   shape["btr--8"],
    // ].join(" ");
    default:
      return {};
    // return [shape["br--8"]].join(" ");
  }
};
