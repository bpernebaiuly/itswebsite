import { useAccessibility } from "@/context/AccessibilityContext";
import { Glasses } from "lucide-react";

const AccessibilityToggle = () => {
  const { isAccessible, setIsAccessible } = useAccessibility();

  return (
    <button
      onClick={() => setIsAccessible(!isAccessible)}
      className="accessibility-toggle"
    >
      {isAccessible ? (
        "Сайттың әдеттегі нұсқасы"
      ) : (
        <Glasses size={20} />
      )}
    </button>
  );
};

export default AccessibilityToggle;
