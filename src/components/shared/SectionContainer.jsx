import { Scene } from '../three/Scene';

export function SectionContainer({ 
  id, 
  title, 
  subtitle, 
  children, 
  ThreeComponent,
  isDark = false,
  className = ''
}) {
  return (
    <section 
      id={id} 
      className={`py-20 relative min-h-screen overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
          : 'bg-gradient-to-b from-white to-gray-50'
      } ${className}`}
    >
      {ThreeComponent && (
        <div className="absolute inset-0">
          <Scene>
            <ThreeComponent />
          </Scene>
        </div>
      )}
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title bg-gradient-to-r from-teal-500 to-teal-700 
            bg-clip-text text-transparent [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] 
            transform hover:scale-105 transition-transform duration-300"
          >
            {title}
          </h2>
          <p className="section-subtitle dark:text-gray-400 opacity-90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="backdrop-blur-sm bg-white/5 dark:bg-gray-900/30 
          rounded-2xl p-8 shadow-2xl border border-white/5"
        >
          {children}
        </div>
      </div>
    </section>
  );
}