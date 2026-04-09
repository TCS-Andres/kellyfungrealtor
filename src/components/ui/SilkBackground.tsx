"use client";

import { useEffect, useRef } from "react";

interface SilkBackgroundProps {
  className?: string;
  /** Base color RGB values — defaults to navy-gold silk */
  colorR?: number;
  colorG?: number;
  colorB?: number;
  /** Speed of animation */
  speed?: number;
  /** Noise grain intensity */
  noiseIntensity?: number;
}

export default function SilkBackground({
  className = "",
  colorR = 90,
  colorG = 85,
  colorB = 110,
  speed = 0.015,
  noiseIntensity = 0.7,
}: SilkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const scale = 2;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const noise = (x: number, y: number) => {
      const G = 2.71828;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      return (rx * ry * (1 + x)) % 1;
    };

    const animate = () => {
      const { width, height } = canvas;
      if (width === 0 || height === 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let x = 0; x < width; x += 2) {
        for (let y = 0; y < height; y += 2) {
          const u = (x / width) * scale;
          const v = (y / height) * scale;

          const tOffset = speed * time;
          const tex_x = u;
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset);

          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 *
                  (tex_x +
                    tex_y +
                    Math.cos(3.0 * tex_x + 5.0 * tex_y) +
                    0.02 * tOffset) +
                  Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
              );

          const rnd = noise(x, y);
          const intensity = Math.max(
            0,
            pattern - (rnd / 15.0) * noiseIntensity
          );

          const r = Math.floor(colorR * intensity);
          const g = Math.floor(colorG * intensity);
          const b = Math.floor(colorB * intensity);

          const index = (y * width + x) * 4;
          if (index < data.length) {
            data[index] = r;
            data[index + 1] = g;
            data[index + 2] = b;
            data[index + 3] = 255;
            // Fill adjacent pixels for performance (step=2)
            if (x + 1 < width) {
              const i2 = (y * width + x + 1) * 4;
              data[i2] = r;
              data[i2 + 1] = g;
              data[i2 + 2] = b;
              data[i2 + 3] = 255;
            }
            if (y + 1 < height) {
              const i3 = ((y + 1) * width + x) * 4;
              data[i3] = r;
              data[i3 + 1] = g;
              data[i3 + 2] = b;
              data[i3 + 3] = 255;
              if (x + 1 < width) {
                const i4 = ((y + 1) * width + x + 1) * 4;
                data[i4] = r;
                data[i4 + 1] = g;
                data[i4 + 2] = b;
                data[i4 + 3] = 255;
              }
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Subtle radial overlay for depth
      const overlayGradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) / 2
      );
      overlayGradient.addColorStop(0, "rgba(0, 0, 0, 0.05)");
      overlayGradient.addColorStop(1, "rgba(0, 0, 0, 0.3)");

      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, width, height);

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colorR, colorG, colorB, speed, noiseIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
