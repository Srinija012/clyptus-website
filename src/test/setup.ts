import '@testing-library/jest-dom/vitest';
import React from 'react';
import { vi } from 'vitest';

vi.mock('../components/StripeHeroCanvas', () => ({
  StripeHeroCanvas: () => React.createElement('div', { 'data-testid': 'stripe-hero-canvas' })
}));
vi.mock('../components/StripeGlobe', () => ({
  StripeGlobe: () => React.createElement('div', { 'data-testid': 'stripe-globe' })
}));

// Polyfill requestAnimationFrame for jsdom test runner
globalThis.requestAnimationFrame = (cb: FrameRequestCallback) => {
  return setTimeout(() => cb(Date.now()), 0) as unknown as number;
};
globalThis.cancelAnimationFrame = (id: number) => clearTimeout(id);
if (typeof window !== 'undefined') {
  window.requestAnimationFrame = globalThis.requestAnimationFrame;
  window.cancelAnimationFrame = globalThis.cancelAnimationFrame;
}
if (typeof globalThis.ImageData === 'undefined') {
  globalThis.ImageData = class ImageData {
    data: Uint8ClampedArray;
    width: number;
    height: number;
    colorSpace: PredefinedColorSpace = 'srgb';
    constructor(arg1: number | Uint8ClampedArray, arg2?: number) {
      if (typeof arg1 === 'number') {
        this.width = arg1;
        this.height = arg2 || 0;
        this.data = new Uint8ClampedArray(this.width * this.height * 4);
      } else {
        this.data = arg1;
        this.width = arg2 || 0;
        this.height = this.width ? Math.floor(arg1.length / (4 * this.width)) : 0;
      }
    }
  } as unknown as typeof ImageData;
}
if (typeof window !== 'undefined' && typeof (window as any).ImageData === 'undefined') {
  (window as any).ImageData = globalThis.ImageData;
}

// Mock scrollTo and canvas for jsdom
if (typeof window !== 'undefined') {
  window.scrollTo = () => {};
  window.requestAnimationFrame = (cb) => setTimeout(cb, 100) as unknown as number;
  window.cancelAnimationFrame = (id) => clearTimeout(id);
  window.HTMLCanvasElement.prototype.getContext = (() => {
    return {
      fillRect: () => {},
      clearRect: () => {},
      getImageData: () => ({ data: [] }),
      putImageData: () => {},
      createImageData: () => [],
      setTransform: () => {},
      drawImage: () => {},
      save: () => {},
      fillText: () => {},
      restore: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      closePath: () => {},
      stroke: () => {},
      translate: () => {},
      scale: () => {},
      rotate: () => {},
      arc: () => {},
      fill: () => {},
      measureText: () => ({ width: 0 }),
      transform: () => {},
      rect: () => {},
      clip: () => {},
      createRadialGradient: () => ({ addColorStop: () => {} }),
      createLinearGradient: () => ({ addColorStop: () => {} }),
    } as unknown as CanvasRenderingContext2D;
  }) as unknown as typeof HTMLCanvasElement.prototype.getContext;
}
