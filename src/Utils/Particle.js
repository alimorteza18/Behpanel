import Particles from "react-tsparticles";

const Particle = () => {
  return ( 
    <>
       <Particles
          style={{zIndex:"-1"}}
      options={{
        background: {
          color: {
            value: "#fffffff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          modes: {
            bubble: {
              distance: 60,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 0,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#000000",
          },
          links: {
            color: "#000000",
            distance: 60,
            enable: true,
            opacity: 0.5,
            width: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.25,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    </>
   );
}
 
export default Particle;