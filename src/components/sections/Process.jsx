'use client';
import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import './process.css';

const Process = () => {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const stepsContainerRef = useRef(null);

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your requirements, budget, and timeline to understand your vision.',
      icon: '💭',
      color: '#E3F2FD'
    },
    {
      number: '02',
      title: 'Design & Proof',
      description: 'Our expert designers create concepts and provide digital proofs for your approval.',
      icon: '🎨',
      color: '#F3E5F5'
    },
    {
      number: '03',
      title: 'Production',
      description: 'Using state-of-the-art technology, we bring your designs to life with precision.',
      icon: '⚙️',
      color: '#FFF3E0'
    },
    {
      number: '04',
      title: 'Quality Check',
      description: 'Every item undergoes rigorous quality inspection before final packaging.',
      icon: '✓',
      color: '#E8F5E9'
    },
    {
      number: '05',
      title: 'Delivery',
      description: 'Your premium products are carefully packaged and delivered to your doorstep.',
      icon: '🚚',
      color: '#FCE4EC'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepCards = entry.target.querySelectorAll('.process-step-card');
            stepCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (stepsContainerRef.current) {
      observer.observe(stepsContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="process-section">
      {/* Decorative Background Blobs */}
      <div className="process-blob process-blob-1"></div>
      <div className="process-blob process-blob-2"></div>
      <div className="process-blob process-blob-3"></div>
      
      <div className="process-container">
        <div className="process-header scroll-animate" ref={titleRef}>
          <h2>Our Process</h2>
          <p className="scroll-animate" ref={subtitleRef}>
            A seamless journey from concept to creation
          </p>
        </div>

        <div className="process-steps-wrapper" ref={stepsContainerRef}>
          {/* Connecting Line */}
          <svg className="process-connector-line" viewBox="0 0 1200 4" preserveAspectRatio="none">
            <path
              d="M 0 2 Q 300 2 600 2 T 1200 2"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2196F3" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#2196F3" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2196F3" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="process-steps-grid">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="process-step-card"
                style={{ '--step-color': step.color }}
              >
                <div className="step-icon-wrapper">
                  <div className="step-icon">
                    <span className="icon-emoji">{step.icon}</span>
                  </div>
                  <div className="step-number">{step.number}</div>
                </div>
                
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                {/* Decorative Corner */}
                <div className="step-corner-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;