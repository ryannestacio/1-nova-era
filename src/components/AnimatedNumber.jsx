import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ target, duration = 2000, prefix = '+', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconecta para animar apenas na primeira vez
        }
      },
      { threshold: 0.1 } // Dispara quando 10% do elemento estiver visível
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const end = parseInt(target, 10);
    if (end === 0) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const progressRatio = Math.min(progress / duration, 1);

      // Função de Easing (easeOutExpo) para desacelerar no final
      const easeOut = progressRatio === 1 ? 1 : 1 - Math.pow(2, -10 * progressRatio);

      setCount(Math.floor(easeOut * end));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={domRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedNumber;
