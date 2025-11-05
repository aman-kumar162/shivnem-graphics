import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FloatingGallery = ({ items }) => {
  const galleryRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const gallery = galleryRef.current;
    const images = imagesRef.current;
    let mousePosX = 0;
    let mousePosY = 0;
    let mouseSpeed = 0;

    // Mouse move parallax effect
    const onMouseMove = (e) => {
      const newMousePosX = e.clientX;
      const newMousePosY = e.clientY;
      
      // Calculate mouse speed
      mouseSpeed = Math.sqrt(
        Math.pow(newMousePosX - mousePosX, 2) +
        Math.pow(newMousePosY - mousePosY, 2)
      );

      mousePosX = newMousePosX;
      mousePosY = newMousePosY;

      // Apply movement to images
      images.forEach((image, index) => {
        const depth = 1 - (index * 0.1); // Different parallax depths
        const moveX = (newMousePosX - window.innerWidth / 2) * 0.01 * depth;
        const moveY = (newMousePosY - window.innerHeight / 2) * 0.01 * depth;
        
        gsap.to(image, {
          x: moveX,
          y: moveY,
          rotation: moveX * 0.05,
          duration: 1,
          ease: 'power2.out'
        });

        // Add tilt effect based on mouse position
        const tiltX = (newMousePosY - window.innerHeight / 2) * 0.01 * depth;
        const tiltY = (newMousePosX - window.innerWidth / 2) * -0.01 * depth;
        
        gsap.to(image, {
          rotateX: tiltX,
          rotateY: tiltY,
          duration: 1,
          ease: 'power2.out'
        });

        // Scale effect based on mouse speed
        const scale = 1 + (mouseSpeed * 0.001);
        gsap.to(image, {
          scale: scale,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    };

    // Scroll-triggered animations
    images.forEach((image, index) => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: 100 + (index * 50),
        opacity: 0,
        scale: 0.8,
        rotation: -10 + (index * 5),
        duration: 1.5,
        ease: 'power2.out'
      });

      // Hover animations
      image.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.1,
          rotation: 0,
          zIndex: 10,
          duration: 0.5,
          ease: 'power2.out'
        });
      });

      image.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          zIndex: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    });

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div 
      ref={galleryRef}
      className="relative min-h-[600px] w-full perspective-1000 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none z-10" />
      {items.map((item, index) => (
        <div
          key={index}
          ref={el => imagesRef.current[index] = el}
          className="absolute group cursor-pointer will-change-transform"
          style={{
            top: `${20 + (index * 5)}%`,
            left: `${20 + (index * 10)}%`,
            transform: `translate(-50%, -50%) perspective(1000px)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="relative transition-transform duration-300 ease-out transform-gpu">
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={item.image}
              alt={item.title}
              className="w-64 h-64 object-cover rounded-lg shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm">{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingGallery;