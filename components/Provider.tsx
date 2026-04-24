import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import "./Provider.css";
import type { Mode } from "@/kumi-ui/utils/kumi-ui.types.ts";
import { getSystemTheme } from "@/kumi-ui/utils/kumi-ui.utils.ts";
import { ChakraProvider } from "@chakra-ui/react";
import kumi_theme from "@/kumi-ui/theme.ts";
import { ThemeProvider, useTheme } from "next-themes";

type KumiUIContextValue = {
  mode: Mode;
  setMode: (mode: Mode) => void;
  // tokens: Tokens;
};

const KumiUIContext = createContext<KumiUIContextValue>({
  mode: "system",
  setMode: () => {},
  // tokens: defaultTokens,
});

export type KumiUIConfig = {
  defaultMode?: Mode;
  // tokens?: Partial<Tokens>;
};

export function KumiUIProvider({
  children,
  defaultMode = "system",
}: React.PropsWithChildren<KumiUIConfig>) {
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    if (mode === "system") {
      document.documentElement.setAttribute("kumi-mode", getSystemTheme());
      return;
    }
    document.documentElement.setAttribute("kumi-mode", mode);
  }, [mode]);

  return (
    <KumiUIContext.Provider value={{ mode, setMode }}>
      <ChakraProvider value={kumi_theme}>
        <ThemeProvider
          attribute="class"
          forcedTheme={mode}
          // disableTransitionOnChange
        />
        {children}
      </ChakraProvider>
    </KumiUIContext.Provider>
  );
}

export function useKumiUI() {
  const context = useContext(KumiUIContext);
  return context;
}
