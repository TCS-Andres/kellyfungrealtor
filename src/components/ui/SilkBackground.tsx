"use client";

import { useEffect, useRef } from "react";

interface SilkBackgroundProps {
  className?: string;
  colorR?: number;
  colorG?: number;
  colorB?: number;
  noiseIntensity?: number;
}

export default function SilkBackground({
  className = "",
  colorR = 90,
  colorG = 85,
  colorB = 110,
  noiseIntensity = 0.7,
}: SilkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendered = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect || rect.width === 0) return;

      // Render at half resolution for performance
      const dpr = 1;
      const w = Math.floor(rect.width * dpr);
      const h = Math.floor(rect.height * dpr);
      canvas.width = w;
      canvas.height = h;

      const scale = 2;
      const step = 3; // skip pixels for speed

      const noise = (x: number, y: number) => {
        const G = 2.71828;
        return (G * Math.sin(G * x) * G * Math.sin(G * y) * (1 + x)) % 1;
      };

      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      for (let x = 0; x < w; x += step) {
        for (let y = 0; y < h; y += step) {
          const u = (x / w) * scale;
          const v = (y / h) * scale;
          const tex_y = v + 0.03 * Math.sin(8.0 * u);

          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 * (u + tex_y + Math.cos(3.0 * u + 5.0 * tex_y)) +
                  Math.sin(20.0 * (u + tex_y))
              );

          const rnd = noise(x, y);
          const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity);

          const r = Math.floor(colorR * intensity);
          const g = Math.floor(colorG * intensity);
          const b = Math.floor(colorB * intensity);

          // Fill step×step block
          for (let dx = 0; dx < step && x + dx < w; dx++) {
            for (let dy = 0; dy < step && y + dy < h; dy++) {
              const idx = ((y + dy) * w + (x + dx)) * 4;
              data[idx] = r;
              data[idx + 1] = g;
              data[idx + 2] = b;
              data[idx + 3] = 255;
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Radial vignette
      const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) / 2);
      grad.addColorStop(0, "rgba(0,0,0,0.02)");
      grad.addColorStop(1, "rgba(0,0,0,0.25)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      rendered.current = true;
    };

    // Render once after a brief delay to get correct dimensions
    const timer = setTimeout(render, 100);

    const handleResize = () => {
      rendered.current = false;
      render();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [colorR, colorG, colorB, noiseIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
