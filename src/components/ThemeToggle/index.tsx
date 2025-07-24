"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLightTheme = theme === "light";

  const toggleTheme = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <div className="absolute z-50 top-4 right-4 ">
        <Skeleton className="h-[1.2rem] w-[1.2rem] size-9" />
      </div>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="absolute z-50 top-4 right-4"
    >
      {isLightTheme ? (
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem]transition-all scale-100 rotate-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
