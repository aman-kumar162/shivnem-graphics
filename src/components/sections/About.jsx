import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Scene } from '../three/Scene';
import { PrintingMachine } from '../three/PrintingMachine';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // Initial fade in animation
    gsap.from('#about', {
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    });

    // Parallax effect for the background
    gsap.to('.about-background', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      y: '20%',
      ease: 'none'
    });

    // Staggered animations for content
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from('.about-story', {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power4.out'
    })
    .from('.highlight-item', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }, '-=0.5')
    .from('.story-visual', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    }, '-=0.8');
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative min-h-screen overflow-hidden">
      <div className="about-background absolute inset-0">
        <Scene>
          <PrintingMachine position={[0, 0, -5]} />
        </Scene>
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent 
            [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transform hover:scale-105 transition-transform duration-300">
            About Shivnem Graphics
          </h2>
          <p className="section-subtitle dark:text-gray-400 opacity-90">
            Your trusted printing partner delivering excellence since 2010
          </p>
        </div>
        
        <div className="about-content relative z-10 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 rounded-2xl p-8 shadow-2xl">
          <div className="about-story">
            <div className="story-content">
              <h3 className="text-2xl font-bold mb-6 text-teal-600 dark:text-teal-400">Our Journey of Excellence</h3>
              <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                Founded in 2010, Shivnem Graphics has evolved into Ambala's premier printing solutions provider. 
                We combine cutting-edge technology with artistic expertise to deliver exceptional print quality 
                and creative excellence.
              </p>
              
              <div className="story-highlights grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="highlight-item transform hover:scale-105 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg flex items-start space-x-4">
                  <div className="highlight-icon text-4xl bg-teal-100 dark:bg-teal-900 p-3 rounded-full">🎯</div>
                  <div className="highlight-text">
                    <h4 className="text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400">Premium Quality</h4>
                    <p className="text-gray-600 dark:text-gray-400">State-of-the-art printing technology ensuring superior results</p>
                  </div>
                </div>
                
                <div className="highlight-item transform hover:scale-105 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg flex items-start space-x-4">
                  <div className="highlight-icon text-4xl bg-teal-100 dark:bg-teal-900 p-3 rounded-full">⚡</div>
                  <div className="highlight-text">
                    <h4 className="text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400">Fast Turnaround</h4>
                    <p className="text-gray-600 dark:text-gray-400">Quick delivery without compromising on quality</p>
                  </div>
                </div>
                
                <div className="highlight-item transform hover:scale-105 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg flex items-start space-x-4">
                  <div className="highlight-icon text-4xl bg-teal-100 dark:bg-teal-900 p-3 rounded-full">💡</div>
                  <div className="highlight-text">
                    <h4 className="text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400">Creative Solutions</h4>
                    <p className="text-gray-600 dark:text-gray-400">Innovative design approaches for unique requirements</p>
                  </div>
                </div>
                
                <div className="highlight-item transform hover:scale-105 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg flex items-start space-x-4">
                  <div className="highlight-icon text-4xl bg-teal-100 dark:bg-teal-900 p-3 rounded-full">🤝</div>
                  <div className="highlight-text">
                    <h4 className="text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400">Customer Focus</h4>
                    <p className="text-gray-600 dark:text-gray-400">Dedicated support and personalized service</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="story-visual mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="visual-element group">
                <div className="visual-content bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-2">
                  <div className="visual-icon text-6xl mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-12">🎨</div>
                  <h4 className="text-2xl font-bold text-white mb-3">Design Excellence</h4>
                  <p className="text-teal-100">Creative solutions that make your brand stand out</p>
                </div>
              </div>
              <div className="visual-element group">
                <div className="visual-content bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:-rotate-2">
                  <div className="visual-icon text-6xl mb-4 transform transition-transform group-hover:scale-110 group-hover:-rotate-12">🖨️</div>
                  <h4 className="text-2xl font-bold text-white mb-3">Modern Technology</h4>
                  <p className="text-teal-100">Latest printing equipment for best results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;