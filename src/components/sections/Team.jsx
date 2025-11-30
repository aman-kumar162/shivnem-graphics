'use client';
import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Team = () => {
    const titleRef = useScrollAnimation();
    const subtitleRef = useScrollAnimation();
    const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    { name: 'Shivam Kumar', position: 'CEO & Creative Head', bio: '20+ years pioneering excellence in printing and branding solutions', expertise: ['Business Strategy', 'Innovation Leadership', 'Client Relations'], avatar: '👨🏽‍💼' },
    { name: 'Aditya Sharma', position: 'Production Director', bio: 'Expert in advanced printing technologies and quality control', expertise: ['Production Management', 'Quality Assurance', 'Technical Innovation'], avatar: '👨🏽‍🔧' },
    { name: 'Ananya Patel', position: 'Design Director', bio: 'Award-winning designer with expertise in brand identity', expertise: ['Creative Design', 'Brand Strategy', 'Art Direction'], avatar: '👩🏽‍🎨' },
    { name: 'Vikram Singh', position: 'Operations Head', bio: 'Specializes in streamlining processes and client satisfaction', expertise: ['Operations Management', 'Process Optimization', 'Team Leadership'], avatar: '👨🏽‍🔧' },
    { name: 'Priya Mehta', position: 'Client Success Manager', bio: 'Dedicated to delivering exceptional client experiences', expertise: ['Client Relations', 'Project Management', 'Communication'], avatar: '👩🏽‍💼' },
    { name: 'Rahul Desai', position: 'Technical Lead', bio: 'Expert in digital and offset printing technologies', expertise: ['Digital Printing', 'Color Management', 'Technical Support'], avatar: '👨🏽‍🔧' }
  ];

  return (
    <section id="team" className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Light magenta solid background */}
      <div className="absolute inset-0 opacity-0 -z-10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 opacity-0 -z-10" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-animate" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" style={{ color: '#000080' }}>Our Team</h2>
          <p className="max-w-2xl mx-auto scroll-animate" ref={subtitleRef} style={{ color: 'var(--text-on-light-muted)' }}>Meet the experts behind our quality service</p>
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, idx) => (
            <article
              key={idx}
              onMouseEnter={() => setHoveredMember(idx)}
              onMouseLeave={() => setHoveredMember(null)}
              className="group relative overflow-hidden rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 bg-white border border-[#FFD1E6] hover:border-[#FF2D95] card-lift scroll-animate"
            >
              {/* Color overlay based on index */}
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full grid place-items-center text-3xl sm:text-4xl bg-[#FF2D95] text-white shadow-glow group-hover:scale-110 transition-transform duration-300 mb-4">
                    {member.avatar}
                  </div>

                  {/* Name and Position */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#000080] transition-colors duration-300 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#FF2D95] font-semibold mb-3">{member.position}</p>

                  {/* Bio */}
                  <p className="text-sm text-[#475569] mb-4">{member.bio}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((e, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-[#FFF0F6] border border-[#FFD0E6] text-[#FF2D95] transition-all duration-300"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;