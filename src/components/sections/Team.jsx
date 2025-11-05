import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Scene } from '../three/Scene';
import { TeamSpheres } from '../three/TeamSpheres';
import { SectionContainer } from '../shared/SectionContainer';
import { useTheme } from '../../context/ThemeContext';

const Team = () => {
  const teamMembers = [
    {
      name: 'Shivam Kumar',
      position: 'CEO & Creative Head',
      bio: '20+ years pioneering excellence in printing and branding solutions',
      expertise: ['Business Strategy', 'Innovation Leadership', 'Client Relations'],
      avatar: '👨🏽‍💼'
    },
    {
      name: 'Aditya Sharma',
      position: 'Production Director',
      bio: 'Expert in advanced printing technologies and quality control',
      expertise: ['Production Management', 'Quality Assurance', 'Technical Innovation'],
      avatar: '👨🏽‍🔧'
    },
    {
      name: 'Ananya Patel',
      position: 'Design Director',
      bio: 'Award-winning designer with expertise in brand identity',
      expertise: ['Creative Design', 'Brand Strategy', 'Art Direction'],
      avatar: '👩🏽‍🎨'
    },
    {
      name: 'Vikram Singh',
      position: 'Operations Head',
      bio: 'Specializes in streamlining processes and client satisfaction',
      expertise: ['Operations Management', 'Process Optimization', 'Team Leadership'],
      avatar: '👨🏽‍�'
    },
    {
      name: 'Priya Mehta',
      position: 'Client Success Manager',
      bio: 'Dedicated to delivering exceptional client experiences',
      expertise: ['Client Relations', 'Project Management', 'Communication'],
      avatar: '👩🏽‍💼'
    },
    {
      name: 'Rahul Desai',
      position: 'Technical Lead',
      bio: 'Expert in digital and offset printing technologies',
      expertise: ['Digital Printing', 'Color Management', 'Technical Support'],
      avatar: '👨🏽‍🔧'
    },
    {
      name: 'Meera Kapoor',
      position: 'Creative Designer',
      bio: 'Specializes in innovative design solutions',
      expertise: ['UI/UX Design', 'Print Design', 'Digital Media'],
      avatar: '👩🏽‍🎨'
    },
    {
      name: 'Arjun Verma',
      position: 'Production Manager',
      bio: 'Expert in large format and specialized printing',
      expertise: ['Large Format', 'Material Selection', 'Quality Control'],
      avatar: '�🏽‍🔧'
    }
  ];

  useGSAP(() => {
    // Team section animations
    gsap.from('.team-member', {
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Avatar animations
    gsap.from('.member-avatar', {
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      scale: 0,
      rotation: 180,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    });
  }, []);

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-neue-haas-display font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-lg font-neue-haas-text text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the experts behind our quality service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-member bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative group p-8 bg-gradient-to-br from-teal-500/10 to-teal-700/10">
                <div className="text-6xl member-avatar flex justify-center mb-6">
                  <span className="transform transition-transform duration-300 group-hover:scale-110">
                    {member.avatar}
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-neue-haas-display font-bold mb-2 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-teal-600 dark:text-teal-400 font-neue-haas-text mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 font-neue-haas-text mb-6">
                    {member.bio}
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h5 className="font-neue-haas-display font-semibold mb-3 dark:text-white">
                      Expertise
                    </h5>
                    <ul className="space-y-2">
                      {member.expertise.map((skill, idx) => (
                        <li 
                          key={idx}
                          className="text-sm text-gray-600 dark:text-gray-300 font-neue-haas-text"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;