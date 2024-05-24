import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './CustomCursorParticles.css';

const CustomCursorParticles = ({ particleColor, radius }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const multiply = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.current.length < multiply) {
        for (let i = 0; i < multiply; i++) {
          let p = new Particle();
          particles.current.push(p);
        }
      }

      for (let i = particles.current.length - 1; i >= 0; i--) {
        particles.current[i].update();
        particles.current[i].draw(ctx);
      }
      requestAnimationFrame(draw);
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.radius = radius;
        this.x = mousePos.current.x;
        this.y = mousePos.current.y;
        this.explosionRadius = 2;
        this.angle = random(0, Math.PI * 2);
        this.velocity = {
          x: Math.sin(this.angle) * this.explosionRadius,
          y: Math.cos(this.angle) * this.explosionRadius,
        };
        this.alpha = Math.random();
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(${particleColor}, ${this.alpha})`;
        ctx.fill();
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.01;
        if (this.alpha < 0) {
          this.reset();
        }
      }
    }

    const follow = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const random = (min, max) => Math.random() * (max - min + 1) + min;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', follow);

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', follow);
    };
  }, [particleColor, radius]);

  return <canvas ref={canvasRef} className='particle-follow'/>;
};

CustomCursorParticles.propTypes = {
  particleColor: PropTypes.string,
  radius: PropTypes.number,
};

CustomCursorParticles.defaultProps = {
  particleColor: '255, 255, 255',
  radius: 1,
};

export default CustomCursorParticles;
