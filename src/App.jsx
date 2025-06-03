import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BacktoTop } from "./components/shared";
import "./styles/App.css";
import "./styles/Globals.scss";
import routesConfig from "./utils/routesConfig.jsx";

// ✅ Accessibility
import { AccessibilityProvider } from "./context/AccessibilityContext";
import AccessibilityToggle from "./components/AccessibilityToggle";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <AccessibilityProvider>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="app">
            <ToastContainer />
            <Suspense fallback={"Loading . . ."}>
              <Router>
                <Routes>
                  {routesConfig.map((route, index) => (
                    <Route
                      key={index}
                      exact
                      path={route?.path}
                      element={route?.element}
                    />
                  ))}
                </Routes>
              </Router>
            </Suspense>
            <BacktoTop />
            <AccessibilityToggle />
          </div>
        </LocalizationProvider>
      </QueryClientProvider>
    </AccessibilityProvider>
  );
};

export default App;
