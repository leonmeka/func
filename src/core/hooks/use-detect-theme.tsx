import { useEffect, useState } from "react";

import { Theme } from "@/core/models";

interface UseDetectThemeProps {
  theme: Theme;
}

export const useDetectTheme = ({ theme }: UseDetectThemeProps) => {
  const [resolvedTheme, setResolvedTheme] = useState<Theme>(theme);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = () => {
      setResolvedTheme(systemTheme.matches ? "dark" : "light");
    };

    handleThemeChange();

    systemTheme.addListener(handleThemeChange);
    return () => {
      systemTheme.removeListener(handleThemeChange);
    };
  }, []);

  return { resolvedTheme };
};
