import { promises as fs } from "fs";
import getTheme from "./theme.js";

const lightTheme = getTheme({
  theme: "light",
  name: "Kong Light",
});

const darkTheme = getTheme({
  theme: "dark",
  name: "Kong Dark",
});

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all([
      fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
      fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
    ])
  )
  .catch(() => process.exit(1));
