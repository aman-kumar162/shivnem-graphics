'use client';
import { useScrollAnimationStagger } from '@/hooks/useScrollAnimation';

const StatsSection = () => {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: '📅' },
    { number: '500+', label: 'Happy Clients', icon: '😊' },
    { number: '1M+', label: 'Prints Delivered', icon: '🖨️' },
    { number: '50+', label: 'Team Members', icon: '👥' }
  ];

  const statsRefs = useScrollAnimationStagger(stats.length);

  return (
    <section className="w-full relative overflow-hidden py-16 sm:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              ref={statsRefs[index]}
              className="text-center group scroll-animate"
            >
              <div className="text-4xl sm:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-slate-900">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
