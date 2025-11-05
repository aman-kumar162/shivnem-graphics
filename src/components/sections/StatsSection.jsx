import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  useGSAP(() => {
    // Counter animation function
    const animateValue = (element, start, end, duration) => {
      const range = end - start;
      let current = start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      
      const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    // Animate stats when in view
    gsap.utils.toArray('.stat-item').forEach((stat) => {
      const number = stat.querySelector('.stat-number');
      const targetNumber = parseInt(stat.dataset.number);
      
      ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        onEnter: () => {
          animateValue(number, 0, targetNumber, 2000);
          gsap.from(stat, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out'
          });
        },
        once: true
      });
    });
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="stat-item flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300" data-number="5000">
            <div className="stat-icon text-4xl mb-4 text-teal-500">📊</div>
            <div className="stat-number text-3xl font-bold text-gray-900 dark:text-white mb-2">0</div>
            <div className="stat-label text-sm text-gray-600 dark:text-gray-300 text-center">Projects Completed</div>
          </div>
          
          <div className="stat-item flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300" data-number="15">
            <div className="stat-icon text-4xl mb-4 text-teal-500">📅</div>
            <div className="stat-number text-3xl font-bold text-gray-900 dark:text-white mb-2">0</div>
            <div className="stat-label text-sm text-gray-600 dark:text-gray-300 text-center">Years Experience</div>
          </div>
          
          <div className="stat-item flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300" data-number="800">
            <div className="stat-icon text-4xl mb-4 text-teal-500">👥</div>
            <div className="stat-number text-3xl font-bold text-gray-900 dark:text-white mb-2">0</div>
            <div className="stat-label text-sm text-gray-600 dark:text-gray-300 text-center">Happy Clients</div>
          </div>
          
          <div className="stat-item flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300" data-number="99">
            <div className="stat-icon text-4xl mb-4 text-teal-500">⭐</div>
            <div className="stat-number text-3xl font-bold text-gray-900 dark:text-white mb-2">0</div>
            <div className="stat-label text-sm text-gray-600 dark:text-gray-300 text-center">Success Rate</div>
          </div>
          
          <div className="stat-item flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300" data-number="50">
            <div className="stat-icon text-4xl mb-4 text-teal-500">🎨</div>
            <div className="stat-number text-3xl font-bold text-gray-900 dark:text-white mb-2">0</div>
            <div className="stat-label text-sm text-gray-600 dark:text-gray-300 text-center">Design Awards</div>
          </div>
          
          <div className="stat-item flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300" data-number="24">
            <div className="stat-icon text-4xl mb-4 text-teal-500">⚡</div>
            <div className="stat-number text-3xl font-bold text-gray-900 dark:text-white mb-2">0</div>
            <div className="stat-label text-sm text-gray-600 dark:text-gray-300 text-center">Hour Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;