import { useEffect, useRef, useState } from "react";

type UseInViewOnceOptions = {
  rootMargin?: string;
  threshold?: number;
};

export const useInViewOnce = (options?: UseInViewOnceOptions) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isInView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: options?.rootMargin ?? "0px 0px -10% 0px",
        threshold: options?.threshold ?? 0.15,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isInView, options?.rootMargin, options?.threshold]);

  return { ref, isInView };
};