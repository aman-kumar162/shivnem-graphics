import React, { useState, useEffect, useRef } from 'react';
import '../css/service.css';

const SERVICES = [
  {
    id: 'digital-printing',
    name: 'Digital Printing',
    icon: '🖥️',
    image: '/SGcol/SGP2.png',
    description: 'High-quality digital printing with fast turnaround times. Specializing in 12x18 and 13x19 formats with weights ranging from 170gsm to 350gsm.',
    categories: [
      {
        title: 'Formats & Sizes',
        icon: '📏',
        items: [
          '12x18 Size Printing',
          '13x19 Size Printing',
          'Custom Size Cuts',
        ],
      },
      {
        title: 'Paper Weights (GSM)',
        icon: '⚖️',
        items: [
          '170 GSM Standard',
          '250 GSM Premium',
          '300 GSM Heavy Duty',
          '350 GSM Ultra Premium',
        ],
      },
      {
        title: 'Media Types',
        icon: '📄',
        items: [
          'Paper Prints',
          'Vinyl Prints',
          'Foil Printing',
          'Texture Paper',
          'Gum Sheets',
        ],
      },
    ],
  },
  {
    id: 'visiting-cards',
    name: 'Specialty Visiting Cards',
    icon: '📇',
    image: '/SGcol/sgvc10.png',
    description: 'Premier business cards from standard regular to high-end Metal, PVC, and Velvet finishes. Customized to make a lasting impression.',
    categories: [
      {
        title: 'Premium Metal Cards',
        icon: '💿',
        items: [
          'Gold Finish Metal Cards',
          'Silver Finish Metal Cards',
          'S.S. (Stainless Steel) Cards',
          'Copper Finish Cards',
          'Minimum Quantity: 50 Cards',
        ],
      },
      {
        title: 'Premium 500 GSM',
        icon: '💎',
        items: [
          '500 GSM + Velvet Coating',
          '500 GSM + Matt Finish',
          '500 GSM + Drip-Off UV',
          'Minimum Quantity: 500 Cards',
        ],
      },
      {
        title: 'NT / PVC Cards',
        icon: '💳',
        items: [
          '800 Micron Fusing',
          'Velvet / Matt Texture',
          'Silver / Gold PVC',
          'Transparent 250/180 Micron',
        ],
      },
      {
        title: 'Regular Visiting Cards',
        icon: '🏠',
        items: [
          'Matt Lamination + UV',
          'Matt Lamination + Texture',
          'Gloss Coated + Texture',
          'Gloss Lamination / Coated',
          'Without Lamination Options',
          'Minimum Quantity: 1000 Cards',
        ],
      },
    ],
  },
  {
    id: 'offset-printing',
    name: 'Offset Printing',
    icon: '⚙️',
    image: '/SGcol/SGP5.png',
    description: 'Large-volume offset printing for commercial needs. Ideal for pamphlets, posters, and high-quality letterheads with precision color matching.',
    categories: [
      {
        title: 'Commercial Collateral',
        icon: '📄',
        items: [
          'Pamphlets & Flyers',
          'Posters & Posters',
          'Corporate Letter Heads',
          'Company Envelopes',
          'Brochures & Catalogues',
          'Bill Books & Registers',
        ],
      },
    ],
  },
  {
    id: 'screen-printing',
    name: 'Screen Printing',
    icon: '🎨',
    image: '/SGcol/SGP6.png',
    description: 'Specialized surface printing for unique materials. We print on everything from wedding cards to wood and aluminium panels.',
    categories: [
      {
        title: 'Surface Specialty',
        icon: '🖌️',
        items: [
          'Wedding & Inv. Cards',
          'Shagun Envelopes',
          'Cloth & Fabric Printing',
          'Wood Surface Printing',
          'Aluminium Panels',
          'Scientific Instruments',
        ],
      },
    ],
  },
  {
    id: 'flex-vinyl',
    name: 'Flex & Vinyl',
    icon: '🏁',
    image: '/SGcol/SGP7.png',
    description: 'Large format outdoor advertising solutions. Durable banners, posters, and high-resolution photographs for all media needs.',
    categories: [
      {
        title: 'Outdoor Advertising',
        icon: '📢',
        items: [
          'High-Res Banners',
          'Flex Posters',
          'Advertising Media',
          'Large Photographs',
          'Vinyl Stickers',
          'Banner Mounting',
        ],
      },
    ],
  },
  {
    id: 'specialty-printing',
    name: 'Specialty Services',
    icon: '✨',
    image: '/SGcol/SGST-1.png',
    description: 'Other specialized printing services including DTF UV transfers, garment tags, and official documentation framing.',
    categories: [
      {
        title: 'Tags & Stickers',
        icon: '🏷️',
        items: [
          'DTF UV Transfer Stickers',
          'Garment Tags & Labels',
          'ATM Pouches',
          'Plate & Stickers',
        ],
      },
      {
        title: 'Official & Personal',
        icon: '📂',
        items: [
          'Doctor Files Printing',
          'Photograph Framing',
          'Copier & Paper Services',
          'Multicolored Envelopes',
        ],
      },
    ],
  },
];


const DAILY_SERVICES = [
  'Digital Printing', 'Wedding & Inv. Cards', 'Pen / Round Printing', 
  'Screen Printing', 'Pamphlets / Leaflets', 'Cloth / Bag Printing',
  'Vinyl / Flex Banners', 'ATM Pouches', 'Garment Tags',
  'Doctor Files', 'Photo Framing', 'Letter Heads',
  'Bill Books', 'Scientific Instruments', 'Aluminium Panels',
  'DTF UV Stickers'
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

        <div className="daily-services-container">
          <div className="daily-services-label">Our Core Printing Services</div>
          <div className="daily-services-tags">
            {DAILY_SERVICES.map((service, idx) => (
              <span key={idx} className="daily-service-tag">{service}</span>
            ))}
          </div>
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
                <img src={service.image} alt={service.name} />
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