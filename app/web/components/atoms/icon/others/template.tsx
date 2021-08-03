import { OthersIconProps } from ".";

export const OthersIconTemplate = (props: OthersIconProps) => {
  switch (props.othersType) {
    case "clock":
      return <ClockIcon />;
    case "checkin":
      return <CheckInIcon />;
    case "children":
      return <ChildrenIcon />;
    case "smoking":
      return <SmokingIcon />;
    case "pets":
      return <PetsIcon />;
    case "parties":
      return <PartiesIcon />;
    case "cleaning":
      return <CleaningIcon />;
    case "caution":
      return <CautionIcon />;
    default:
      throw new Error("Invalid othersType provided");
  }
};

const ClockIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󰀥</span>
  );
};

const CheckInIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󰄄</span>
  );
};

const ChildrenIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󱤄</span>
  );
};

const SmokingIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󱤈</span>
  );
};

const PetsIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󱤆</span>
  );
};

const PartiesIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󱤂</span>
  );
};

const CleaningIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󹀁</span>
  );
};

const CautionIcon = (): JSX.Element => {
  return (
    <span style={{ display: "block", width: "100%", height: "auto" }}>󱠃</span>
  );
};
