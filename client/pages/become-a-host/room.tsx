import { useStayState } from "../../context/stay";
import React, { useEffect } from "react";

const RoomPage = () => {
  const stateStay = useStayState();
  console.log(stateStay);
  return <div>hello</div>;
};

export default RoomPage;
