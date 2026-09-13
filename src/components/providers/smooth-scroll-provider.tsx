"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      stopInertiaOnNavigate: true,
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
