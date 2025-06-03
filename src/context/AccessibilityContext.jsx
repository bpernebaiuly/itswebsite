import { createContext, useContext, useState, useEffect } from "react";

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [isAccessible, setIsAccessible] = useState(false);

  // Сақтау үшін
  useEffect(() => {
    const savedMode = localStorage.getItem("accessibility");
    if (savedMode === "true") setIsAccessible(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("accessibility", isAccessible);
  }, [isAccessible]);

  return (
    <AccessibilityContext.Provider value={{ isAccessible, setIsAccessible }}>
      <div className={isAccessible ? "accessibility-mode" : ""}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
