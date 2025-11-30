import React, { useState, useEffect, useRef } from 'react';
import '../css/service.css';

const SERVICES = [
  {
    id: 'printing-services',
    name: 'Printing Services',
    icon: '🖨️',
    description: 'Comprehensive printing solutions from digital to traditional printing methods. We offer high-quality printing for wedding cards, business materials, marketing collateral, and more with professional finishing options including embossing, foil stamping, and UV coating.',
    categories: [
      {
        title: 'Wedding & Invitation Cards',
        icon: '💝',
        items: [
          'Custom Wedding Card Creation',
          'Matrimonial Invitation Printing',
          'Wedding Invite Printing Solutions',
          'Bridal Card Printing Service',
          'Nuptial Card Production',
          'Wedding Stationery Printing',
          'Ceremony Card Printing',
        ],
      },
      {
        title: 'Business & Professional',
        icon: '💼',
        items: [
          'Professional Business Card Printing',
          'Printed Visiting Cards',
          'Name Card Printing',
          'Personalized Visiting Card Printing',
          'Bill Book Printing Services',
          'Custom Bill Book Services',
        ],
      },
      {
        title: 'Marketing Materials',
        icon: '📢',
        items: [
          'Brochure Printing Service',
          'Pamphlet Printing Services',
          'Banner Printing Service',
          'Custom Banner Services',
          'Banner Production Services',
          'Signage Printing Solutions',
        ],
      },
    ],
  },
  {
    id: 'digital-printing',
    name: 'Digital Printing',
    icon: '🖥️',
    description: 'High-quality digital printing with fast turnaround times and vibrant colors. Perfect for short runs, variable data printing, and on-demand projects. Our state-of-the-art digital presses deliver exceptional quality for all your printing needs.',
    categories: [
      {
        title: 'Digital Print Services',
        icon: '🖼️',
        items: [
          'Digital Screen Printing Services',
          'Digital Color Printing',
          'High-Resolution Digital Prints',
          'Custom Digital Printing',
          'Digital Print Solutions',
          'On-Demand Digital Printing',
          'On-Demand Printing Services',
        ],
      },
      {
        title: 'Specialized Digital',
        icon: '👕',
        items: [
          'Print Media Solutions',
          'Direct To Garment Printing',
          'Custom Apparel Printing',
        ],
      },
    ],
  },
  {
    id: 'screen-printing',
    name: 'Screen Printing',
    icon: '🎨',
    description: 'Premium screen printing services for textiles, signage, and custom merchandise. We use advanced techniques and high-quality inks to ensure vibrant, long-lasting prints on various materials including fabric, metal, and plastic.',
    categories: [
      {
        title: 'Screen Print Techniques',
        icon: '🖌️',
        items: [
          'Screen Printing Service',
          'Precision Screen Printing',
          'Advanced Screen Printing Services',
          'High Resolution Screen Printing',
          'Modern Screen Printing Techniques',
          'Stenciling Printing Services',
          'Serigraphy Printing Services',
        ],
      },
    ],
  },
  {
    id: 'offset-printing',
    name: 'Offset Surface Printing',
    icon: '⚙️',
    description: 'Large-volume offset printing with consistent quality and color accuracy. Ideal for magazines, catalogues, brochures, and high-volume commercial printing projects. We offer both sheetfed and web offset printing with premium finishing options.',
    categories: [
      {
        title: 'Offset Services',
        icon: '🏭',
        items: [
          'Sheetfed Offset Printing',
          'Web Offset Printing',
          'Commercial Printing',
          'High Volume Production',
          'Catalogue Printing',
          'Magazine Printing',
        ],
      },
      {
        title: 'Finishing Options',
        icon: '✨',
        items: [
          'Spot UV Coating',
          'Embossing & Debossing',
          'Foil Stamping',
          'Lamination Services',
        ],
      },
    ],
  },
  {
    id: 'web-development',
    name: 'Web Development',
    icon: '💻',
    description: 'Full-stack web development from design to deployment with modern technologies. We create responsive, fast, and SEO-friendly websites, e-commerce platforms, and custom web applications tailored to your business needs with cutting-edge features.',
    categories: [
      {
        title: 'Website Development',
        icon: '🌐',
        items: [
          'Corporate Website Design',
          'E-commerce Development',
          'School & Educational Websites',
          'Portfolio Websites',
          'Landing Page Design',
          'Responsive Web Design',
        ],
      },
      {
        title: 'Web Applications',
        icon: '🖧',
        items: [
          'CRM Development',
          'Custom Web Applications',
          'Content Management Systems',
          'Database Integration',
          'API Development',
        ],
      },
      {
        title: 'Advanced Features',
        icon: '🤖',
        items: [
          'AI Chatbot Integration',
          'Payment Gateway Integration',
          'SEO Optimization',
          'Performance Optimization',
          'Security Implementation',
        ],
      },
    ],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    icon: '📊',
    description: 'Strategic digital marketing services to grow your brand and reach your target audience. From SEO and paid advertising to social media marketing and content strategy, we help businesses achieve measurable results and maximize ROI.',
    categories: [
      {
        title: 'SEO Services',
        icon: '🔍',
        items: [
          'Search Engine Optimization',
          'Local SEO',
          'Technical SEO',
          'On-Page Optimization',
          'Off-Page SEO',
          'Keyword Research',
        ],
      },
      {
        title: 'Paid Advertising',
        icon: '💰',
        items: [
          'Google Ads Campaigns',
          'Social Media Advertising',
          'Display Advertising',
          'Retargeting Campaigns',
          'PPC Management',
        ],
      },
      {
        title: 'Content & Social',
        icon: '📱',
        items: [
          'Social Media Marketing',
          'Content Marketing',
          'Email Marketing',
          'Brand Strategy',
          'Analytics & Reporting',
        ],
      },
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOrigin, setModalOrigin] = useState({ x: '50%', y: '50%' });
  const [expandedCategory, setExpandedCategory] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const cardRefs = useRef({});

  const handleCardMouseEnter = (serviceId, event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const originX = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
    const originY = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
    
    setModalOrigin({ x: `${originX}%`, y: `${originY}%` });
    
    // Add rotation class
    card.classList.add('rotating');
    
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveService(SERVICES.find(s => s.id === serviceId));
      setIsModalOpen(true);
      card.classList.remove('rotating');
    }, 400);
  };

  const handleCardMouseLeave = (event) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    event.currentTarget.classList.remove('rotating');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setExpandedCategory(null);
    setTimeout(() => setActiveService(null), 300);
  };

  const handleCardClick = (serviceId, event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const originX = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
    const originY = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
    
    setModalOrigin({ x: `${originX}%`, y: `${originY}%` });
    setActiveService(SERVICES.find(s => s.id === serviceId));
    setIsModalOpen(true);
  };

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <div className="services-wrapper">
      <div className="container">
        <div className="header">
          <h1>Our Services</h1>
                     <p>From traditional printing to cutting-edge digital solutions — everything you need to grow your brand and business.</p>
          
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              ref={el => cardRefs.current[service.id] = el}
              className="service-card"
              onMouseEnter={(e) => handleCardMouseEnter(service.id, e)}
              onMouseLeave={handleCardMouseLeave}
              onClick={(e) => handleCardClick(service.id, e)}
            >
              <div className="card-image">
                <img src="/sg.png" alt={service.name} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.name}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <>
          <div
            className={`modal-overlay ${isModalOpen ? 'active' : ''}`}
            onClick={closeModal}
          />
          <div
            className={`modal-container ${isModalOpen ? 'active' : ''}`}
            style={{
              '--modal-origin-x': modalOrigin.x,
              '--modal-origin-y': modalOrigin.y,
            }}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <button className="modal-close" onClick={closeModal}>
                  ✕
                </button>
                <div className="modal-header-content">
                  <div className="modal-icon">{activeService.icon}</div>
                  <div>
                    <h2 className="modal-title">{activeService.name}</h2>
                    <p className="modal-subtitle">{activeService.description}</p>
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <div className="categories-list">
                  {activeService.categories.map((category, idx) => (
                    <div key={idx} className="category-item">
                      <div 
                        className="category-header-clickable"
                        onClick={() => toggleCategory(idx)}
                      >
                        <div className="category-header-left">
                          <div className="category-icon">{category.icon}</div>
                          <h3 className="category-title">{category.title}</h3>
                        </div>
                        <div className="category-count">{category.items.length} services</div>
                        <button className="expand-btn">
                          {expandedCategory === idx ? '−' : '+'}
                        </button>
                      </div>
                      
                      {expandedCategory === idx && (
                        <div className="category-details">
                          <ul className="items-list">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="item">
                                <div className="item-bullet">✓</div>
                                <span className="item-text">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <a 
                  href="#contact" 
                  className="btn btn-primary"
                  onClick={(e) => {
                    closeModal();
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                >
                  <span>📧</span>
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}