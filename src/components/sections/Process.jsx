'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Process = () => {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your requirements, budget, and timeline to understand your vision.',
      icon: '💭'
    },
    {
      number: '02',
      title: 'Design & Proof',
      description: 'Our expert designers create concepts and provide digital proofs for your approval.',
      icon: '🎨'
    },
    {
      number: '03',
      title: 'Production',
      description: 'Using state-of-the-art technology, we bring your designs to life with precision.',
      icon: '⚙️'
    },
    {
      number: '04',
      title: 'Quality Check',
      description: 'Every item undergoes rigorous quality inspection before final packaging.',
      icon: '✓'
    },
    {
      number: '05',
      title: 'Delivery',
      description: 'Your premium products are carefully packaged and delivered to your doorstep.',
      icon: '🚚'
    }
  ];

  return (
    <section id="process" className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-0 -z-10" />
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-animate" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#000080' }}>
            Our Process
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto scroll-animate" ref={subtitleRef} style={{ color: 'var(--text-on-light-muted)' }}>
            A seamless journey from concept to creation
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brand-2/20 via-brand-2/40 to-brand-2/20 -translate-y-1/2 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col items-center text-center scroll-animate"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-lg border border-brand-2/20 flex items-center justify-center text-3xl sm:text-4xl mb-6 relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:border-brand-2 group-hover:shadow-glow">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-2 text-white flex items-center justify-center text-sm font-bold shadow-md">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#000080' }}>{step.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-on-light-muted)' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;