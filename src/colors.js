import { default as lightColorsImport } from "@primer/primitives/dist/js/colors/light.js";
import { default as lightColorblindColorsImport } from "@primer/primitives/dist/js/colors/light_colorblind.js";
import { default as darkColorsImport } from "@primer/primitives/dist/js/colors/dark.js";
import { default as darkColorblindColorsImport } from "@primer/primitives/dist/js/colors/dark_colorblind.js";
import { default as dimmedColorsImport } from "@primer/primitives/dist/js/colors/dark_dimmed.js";

const lightColors = lightColorsImport.default || lightColorsImport;
const lightColorblindColors = lightColorblindColorsImport.default || lightColorblindColorsImport;
const darkColors = darkColorsImport.default || darkColorsImport;
const darkColorblindColors = darkColorblindColorsImport.default || darkColorblindColorsImport;
const dimmedColors = dimmedColorsImport.default || dimmedColorsImport;

export function getColors(theme) {
  switch (theme) {
    case "light":
      // Create a copy to avoid mutating the imported object
      const lightCopy = JSON.parse(JSON.stringify(lightColors));
      lightCopy.success.emphasis = "#1f883d";
      lightCopy.btn.primary.bg = lightCopy.success.emphasis;
      lightCopy.btn.primary.hoverBg = lightCopy.scale.green[5];
      lightCopy.fg.default = "#1f2328";
      lightCopy.fg.muted = "#656d76";
      return lightCopy;
    case "light_colorblind":
      return lightColorblindColors;
    case "dark":
      // Create a copy to avoid mutating the imported object
      const darkCopy = JSON.parse(JSON.stringify(darkColors));
      darkCopy.fg.default = "#e6edf3";
      darkCopy.fg.muted = "#7d8590";
      darkCopy.accent.fg = "#2f81f7";
      darkCopy.severe.subtle = "rgba(219, 109, 40, 0.1)";
      darkCopy.danger.subtle = "rgba(248, 81, 73, 0.1)";
      darkCopy.done.subtle = "rgba(163, 113, 247, 0.1)";
      darkCopy.sponsors.subtle = "rgba(219, 97, 162, 0.1)";
      return darkCopy;
    case "dark_colorblind":
      return darkColorblindColors;
    case "dark_dimmed":
      return dimmedColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

export const pictaColors = {
  red: { medium: "#ce2233", light: "#ff7a80" },
  orange: { medium: "#d76500", light: "#ff9566" },
  yellow: { medium: "#bc8700", light: "#ffc960" },
  olive: { medium: "#7c8200", light: "#c6ce59" },
  green: { medium: "#22893a", light: "#56da70" },
  cyan: { medium: "#00899b", light: "#50d4cf" },
  blue: { medium: "#0052ac", light: "#75bfff" },
  indigo: { medium: "#633ac1", light: "#c1b1ff" },
  purple: { medium: "#ab44c5", light: "#e8a1ff" },
  pink: { medium: "#d33887", light: "#ff9ec5" },
};
