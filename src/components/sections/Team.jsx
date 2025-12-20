'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import './team.css';

const Team = () => {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const [hoveredMember, setHoveredMember] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);
  const teamGridRef = useRef(null);

  const teamMembers = [
    { 
      name: 'Shivam Kumar', 
      position: 'CEO & Creative Head', 
      bio: '20+ years pioneering excellence in printing and branding solutions', 
      expertise: ['Business Strategy', 'Innovation Leadership', 'Client Relations'], 
      avatar: '👨🏽‍💼',
      color: '#E3F2FD',
      accentColor: '#2196F3'
    },
    { 
      name: 'Aditya Sharma', 
      position: 'Production Director', 
      bio: 'Expert in advanced printing technologies and quality control', 
      expertise: ['Production Management', 'Quality Assurance', 'Technical Innovation'], 
      avatar: '👨🏽‍🔧',
      color: '#F3E5F5',
      accentColor: '#9C27B0'
    },
    { 
      name: 'Ananya Patel', 
      position: 'Design Director', 
      bio: 'Award-winning designer with expertise in brand identity', 
      expertise: ['Creative Design', 'Brand Strategy', 'Art Direction'], 
      avatar: '👩🏽‍🎨',
      color: '#FCE4EC',
      accentColor: '#E91E63'
    },
    { 
      name: 'Vikram Singh', 
      position: 'Operations Head', 
      bio: 'Specializes in streamlining processes and client satisfaction', 
      expertise: ['Operations Management', 'Process Optimization', 'Team Leadership'], 
      avatar: '👨🏽‍🔧',
      color: '#E0F2F1',
      accentColor: '#00897B'
    },
    { 
      name: 'Priya Mehta', 
      position: 'Client Success Manager', 
      bio: 'Dedicated to delivering exceptional client experiences', 
      expertise: ['Client Relations', 'Project Management', 'Communication'], 
      avatar: '👩🏽‍💼',
      color: '#FFF3E0',
      accentColor: '#FF9800'
    },
    { 
      name: 'Rahul Desai', 
      position: 'Technical Lead', 
      bio: 'Expert in digital and offset printing technologies', 
      expertise: ['Digital Printing', 'Color Management', 'Technical Support'], 
      avatar: '👨🏽‍🔧',
      color: '#E8F5E9',
      accentColor: '#4CAF50'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const teamCards = entry.target.querySelectorAll('.team-member-card');
            teamCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (teamGridRef.current) {
      observer.observe(teamGridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="team" className="team-section">
      {/* Decorative Background Elements */}
      <div className="team-blob team-blob-1"></div>
      <div className="team-blob team-blob-2"></div>
      <div className="team-blob team-blob-3"></div>

      <div className="team-container">
        <div className="team-header scroll-animate" ref={titleRef}>
          <h2>Our Team</h2>
          <p className="scroll-animate" ref={subtitleRef}>
            Meet the experts behind our quality service
          </p>
        </div>

        <div className="team-grid" ref={teamGridRef}>
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`team-member-card ${flippedCard === idx ? 'flipped' : ''}`}
              onMouseEnter={() => setHoveredMember(idx)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => handleCardClick(idx)}
              style={{ 
                '--member-color': member.color,
                '--accent-color': member.accentColor
              }}
            >
              <div className="card-inner">
                {/* Front of Card */}
                <div className="card-front">
                  <div className="card-background-pattern"></div>
                  
                  <div className="member-avatar-wrapper">
                    <div className="avatar-glow"></div>
                    <div className="member-avatar">
                      {member.avatar}
                    </div>
                  </div>

                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-position">{member.position}</p>
                  </div>

                  <div className="card-footer">
                    <span className="flip-hint">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 11a5 5 0 110-10 5 5 0 010 10z"/>
                        <path d="M8 5.5a.5.5 0 01.5.5v3.5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z"/>
                      </svg>
                      Tap for details
                    </span>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="card-back">
                  <div className="card-back-content">
                    <p className="member-bio">{member.bio}</p>
                    
                    <div className="expertise-section">
                      <h4>Expertise</h4>
                      <div className="expertise-tags">
                        {member.expertise.map((skill, i) => (
                          <span 
                            key={i} 
                            className="expertise-tag"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="back-button" onClick={(e) => {
                      e.stopPropagation();
                      setFlippedCard(null);
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 11a5 5 0 110-10 5 5 0 010 10z"/>
                        <path d="M10.5 8a.5.5 0 01-.5.5H6a.5.5 0 010-1h4a.5.5 0 01.5.5z"/>
                      </svg>
                      Back
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="card-glow-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;