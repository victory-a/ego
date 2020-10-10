import { theme } from "@chakra-ui/core";
import colors from "./colors";

const breakpoints = ["375px", "768px", "1025px", "1441px"];

breakpoints.mobile = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.laptop = breakpoints[2];
breakpoints.desktop = breakpoints[3];

export default {
  ...theme,
  breakpoints,
  fonts: {
    heading: "'Indie Flower', cursive, sans-serif",
    body: "'Raleway', sans-serif"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  },
  colors: {
    ...theme.colors,
    buddy: {
      ...colors
    }
  }
};
