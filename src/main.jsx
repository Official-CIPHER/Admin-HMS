import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Create Context for common share data
export const Context = createContext({ isAuthenticated: false });

// Create a Wrapper function that handle state
const AppWrapper = () => {
  // Authenticated State
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // User State
  const [user, setUser] = useState({});

  //  Context.Provider - Provides the all the value which is inside its tag to all the useContext
  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
