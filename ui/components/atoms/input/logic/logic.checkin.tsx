/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const FromProperties = [
  {
    value: "flexible",
    display: "Flexible",
  },
  {
    value: 8,
    display: "8:00 a.m.",
  },
  {
    value: 9,
    display: "9:00 a.m.",
  },
  { value: 10, display: "10:00 a.m." },
  {
    value: 11,
    display: "11:00 a.m.",
  },
  {
    value: 12,
    display: "12:00 p.m.",
  },
  {
    value: 13,
    display: "1:00 p.m.",
  },
  {
    value: 14,
    display: "2:00 p.m.",
  },
  {
    value: 15,
    display: "3:00 p.m.",
  },
  {
    value: 16,
    display: "4:00 p.m.",
  },
  {
    value: 17,
    display: "5:00 p.m.",
  },
  {
    value: 18,
    display: "6:00 p.m.",
  },
  {
    value: 19,
    display: "7:00 p.m.",
  },
  {
    value: 20,
    display: "8:00 p.m.",
  },
  {
    value: 21,
    display: "9:00 p.m.",
  },
  {
    value: 22,
    display: "10:00 p.m.",
  },
  {
    value: 23,
    display: "11:00 p.m.",
  },
  {
    value: 24,
    display: "12:00 p.m.",
  },
  {
    value: 25,
    display: "1:00 a.m. (next day)",
  },
];

export const FromOptions = FromProperties.map((option, index) => {
  return (
    <option key={index} value={option.value}>
      {option.display}
    </option>
  );
});

const ToProperties = [
  {
    value: "flexible",
    display: "Flexible",
  },
  {
    value: 9,
    display: "9:00 a.m.",
  },
  { value: 10, display: "10:00 a.m." },
  {
    value: 11,
    display: "11:00 a.m.",
  },
  {
    value: 12,
    display: "12:00 p.m.",
  },
  {
    value: 13,
    display: "1:00 p.m.",
  },
  {
    value: 14,
    display: "2:00 p.m.",
  },
  {
    value: 15,
    display: "3:00 p.m.",
  },
  {
    value: 16,
    display: "4:00 p.m.",
  },
  {
    value: 17,
    display: "5:00 p.m.",
  },
  {
    value: 18,
    display: "6:00 p.m.",
  },
  {
    value: 19,
    display: "7:00 p.m.",
  },
  {
    value: 20,
    display: "8:00 p.m.",
  },
  {
    value: 21,
    display: "9:00 p.m.",
  },
  {
    value: 22,
    display: "10:00 p.m.",
  },
  {
    value: 23,
    display: "11:00 p.m.",
  },
  {
    value: 24,
    display: "12:00 p.m.",
  },
  {
    value: 25,
    display: "1:00 a.m. (next day)",
  },
  {
    value: 26,
    display: "2:00 a.m. (next day)",
  },
];

export const ToOptions = ToProperties.map((option, index) => {
  return (
    <option key={index} value={option.value}>
      {option.display}
    </option>
  );
});
