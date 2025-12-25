import { Button } from "@/components/ui/button";
import DarkModeToggle from "@/hooks/DarkModeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary-color">
      <div className=" mx-auto  sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-16  ">
          <div className="flex items-center">
            <div className="logo hover-effect"></div>
            {/* <img
              src="./Logo.svg"
              alt="Logo"
              className="w-auto h-8 sm:h-10 brightness-0 logo"
            /> */}
          </div>

          <div className="flex items-center sm:space-x-4">
            <DarkModeToggle />
            <Button variant="secondary">Login</Button>
            <Button variant="secondary">Signup</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
