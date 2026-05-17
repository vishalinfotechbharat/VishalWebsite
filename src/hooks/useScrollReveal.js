import { useEffect, useRef } from 'react';

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
};

export default useScrollReveal;
