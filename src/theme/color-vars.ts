import DarkThemes from "./dark";
import LightThemes from "./light";
import { ColorTypes } from "../types/color-vars";

const ColorThemes: ColorTypes = {
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  primary: "#2B6CB0",
  blue: "#3182CE",
  blueActive: "#2B6CB0",
  link: {
    text: "#4299E1",
    active: "#3182CE"
  },
  heading: {
    shadow: "rgb(43 108 176 / 40%) 0px 3px 3px",
    gradient: "linear-gradient(rgb(43, 108, 176) 30%, rgb(43, 108, 176) 70%)"
  },
  card: {
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    active:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  }
};

export default ColorThemes;

export { DarkThemes, LightThemes };
