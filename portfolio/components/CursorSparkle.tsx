'use client';

import { useEffect } from 'react';

const COLORS = [
  '#C1440E', // terracotta
  '#E8704A', // terracotta light
  '#E8A598', // dusty rose
  '#7A9E7E', // sage
  '#D4872A', // warm amber
  '#FAE5DC', // terracotta pale
];

export default function CursorSparkle() {
  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let frameId: number;
    let lastTime = 0;
    const THROTTLE_MS = 60; // spawn max ~16 dots/sec

    function spawnDot(x: number, y: number) {
      const dot = document.createElement('div');
      dot.className = 'sparkle-dot';

      const size = 5 + Math.random() * 7;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const offsetX = (Math.random() - 0.5) * 20;
      const offsetY = (Math.random() - 0.5) * 20;

      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${x + offsetX}px`;
      dot.style.top = `${y + offsetY}px`;
      dot.style.background = color;
      dot.style.opacity = '0';

      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 700);
    }

    function onMouseMove(e: MouseEvent) {
      const now = Date.now();
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (now - lastTime > THROTTLE_MS && speed > 4) {
        lastTime = now;
        lastX = e.clientX;
        lastY = e.clientY;

        const count = Math.min(3, Math.floor(speed / 10) + 1);
        for (let i = 0; i < count; i++) {
          spawnDot(e.clientX, e.clientY);
        }
      }
    }

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return null;
}
