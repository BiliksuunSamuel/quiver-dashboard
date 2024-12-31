import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { AppRouter } from "./router";
import { AppView } from "./views";
import "./index.css";

export default function App() {
  return (
    <ThemeProvider theme={theme()}>
      <AppView>
        <AppRouter />
      </AppView>
    </ThemeProvider>
  );
}
