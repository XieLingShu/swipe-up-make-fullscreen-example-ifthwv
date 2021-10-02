import React, { useEffect, useRef } from 'react';
const GameCanvas = ({ className }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const onResize = () => {
      const canvas = canvasRef.current;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      ctx.font = '48px serif';
      ctx.fillText('Hello world', 10, 50);
    }
    onResize();
    window.addEventListener('resize', onResize);
    return (() => {
      window.removeEventListener('resize', resize);
    })
  }, []);

  return (
    <canvas ref={canvasRef} className={className}></canvas>
  )
}

export default GameCanvas;