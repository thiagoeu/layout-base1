import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";
import { AppThemeProvider, DrawerProvider } from "./contexts";
import { MenuLateral } from "./components";

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
