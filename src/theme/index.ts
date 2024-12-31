import { createTheme } from "@mui/material";
import { ErrorShades, OrangeShades, PrimaryShades } from "./AppColors";

export default (mode: "dark" | "light" = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: PrimaryShades[500],
        dark: PrimaryShades[600],
        light: PrimaryShades[200],
      },
      error: {
        main: ErrorShades[500],
        dark: ErrorShades[600],
        light: ErrorShades[100],
      },
      warning: {
        main: OrangeShades[500],
        dark: OrangeShades[600],
        light: OrangeShades[100],
      },
    },
  });
