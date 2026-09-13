"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "it" | "en";

export type Localized = {
  it: string;
  en: string;
};

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
  t: (value: Localized) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "site-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only hydration of a value (localStorage/navigator.language) unavailable during SSR
    setLangState((current) => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "it" || stored === "en") return stored;
      const browserLang = window.navigator.language?.toLowerCase() ?? "";
      return browserLang.startsWith("it") ? current : "en";
    });
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const toggleLang = () => setLang(lang === "it" ? "en" : "it");

  const value: LanguageContextValue = {
    lang,
    toggleLang,
    setLang,
    t: (value: Localized) => value[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
