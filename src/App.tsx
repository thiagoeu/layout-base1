import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { DarkTheme, LightTheme } from "./themes";
import { AppThemeProvider } from "./contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};
