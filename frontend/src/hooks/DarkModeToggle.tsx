import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <Button
      variant="secondary"
      onClick={() => setTheme((prev) => !prev)}
      className="rounded-full"
    >
      {theme ? <Moon /> : <Sun />}
    </Button>
  );
};

export default DarkModeToggle;
