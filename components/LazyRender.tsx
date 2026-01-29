'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyRenderProps {
  children: React.ReactNode;
  minHeight?: string;
}

export default function LazyRender({ children, minHeight = '18rem' }: LazyRenderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | null = null;

    const updateReduce = () => {
      if (reduceQuery.matches) {
        setIsVisible(true);
        observer?.disconnect();
        observer = null;
      }
    };

    updateReduce();

    if (!isMobile || reduceQuery.matches) {
      setIsVisible(true);
      reduceQuery.addEventListener('change', updateReduce);
      return () => reduceQuery.removeEventListener('change', updateReduce);
    }

    const node = containerRef.current;
    if (!node) {
      reduceQuery.addEventListener('change', updateReduce);
      return () => reduceQuery.removeEventListener('change', updateReduce);
    }

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer?.disconnect();
          observer = null;
        }
      },
      { rootMargin: '120px 0px' }
    );

    observer.observe(node);

    reduceQuery.addEventListener('change', updateReduce);

    return () => {
      observer?.disconnect();
      reduceQuery.removeEventListener('change', updateReduce);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight }}>
      {isVisible ? children : null}
    </div>
  );
}
