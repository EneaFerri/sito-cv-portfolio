"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
