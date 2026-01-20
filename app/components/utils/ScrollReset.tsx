'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Forzamos al navegador a no recordar la posición al recargar (F5)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // 2. Llevamos la ventana al punto cero inmediatamente
    window.scrollTo(0, 0);
  }, [pathname]); // Se dispara cada vez que cambias de página o recargas

  return null;
}