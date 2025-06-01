
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import "./Particles1.css";
const Particles1 = () => {
   
  const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
    }, []);
  const particlesOptions = {
    background: {
      color: {
        value: "rgba(0,0,0,0)", // Fully transparent black
        // or simply: value: "transparent",
      },
    },
    fpsLimit:120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push', 
        },
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,

          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff', 
      },
      links: {
        color: '#ffffff', 
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },

      collisions: {
        enable: true,
      },

      move: {
        direction: 'none',
        enable: true,
        outModes:{
            default:"bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: 100, 
      },
      opacity: {
        value:0.5,
      },
      shape: {
        type: 'circle', 
      },
      size: {
        value: { min: 1, max: 6 }, 
      },
    },
    detectRetina: true,
  };

  return (
    <Particles id="tsparticles-black"  init={particlesInit} options={particlesOptions} />
  );
};

export default Particles1;