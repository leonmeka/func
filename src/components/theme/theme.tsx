import { PropsWithChildren } from "react";

import { Theme as ThemeType } from "@/types";

import { useDetectTheme } from "@/hooks/use-detect-theme";

interface ThemeProps {
  theme: ThemeType;
}

export const Theme = ({ theme, children }: PropsWithChildren<ThemeProps>) => {
  const { resolvedTheme } = useDetectTheme({ theme });

  return (
    <div
      className={`w-full h-full ${theme === "system" ? resolvedTheme : theme}`}
    >
      {children}
    </div>
  );
};
