import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './FollowingCircle.css';

const FollowingCircle = ({ primaryColor, secondaryColor, numCircles }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      addParticle(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const addParticle = (x, y) => {
    particles.current.push({ x, y, id: Math.random() });
    if (particles.current.length > numCircles) {
      particles.current.shift();
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 5, 0, 2 * Math.PI, false);
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, primaryColor);
      gradient.addColorStop(1, secondaryColor);
      ctx.fillStyle = gradient;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    draw();
  }, [primaryColor, secondaryColor]);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

FollowingCircle.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  numCircles: PropTypes.number,
};

FollowingCircle.defaultProps = {
  primaryColor: 'yellow',
  secondaryColor: 'red',
  numCircles: 10,
};

export default FollowingCircle;
