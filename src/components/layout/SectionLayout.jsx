import { useTheme } from '../context/ThemeContext';

export function SectionLayout({ 
  id, 
  children, 
  className = '', 
  hasBackground = true,
  isDark = false
}) {
  const { theme } = useTheme();

  return (
    <section
      id={id}
      className={`py-20 relative min-h-screen overflow-hidden ${className}`}
      style={{
        backgroundColor: hasBackground 
          ? isDark ? theme.background.paper : theme.background.default
          : 'transparent',
        color: theme.text.primary,
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out'
      }}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ title, subtitle }) {
  const { theme } = useTheme();

  return (
    <div className="text-center mb-16">
      <h2 className="section-title bg-gradient-to-r from-teal-500 to-teal-700 
        bg-clip-text text-transparent [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] 
        transform hover:scale-105 transition-transform duration-300"
      >
        {title}
      </h2>
      <p className="section-subtitle" style={{ color: theme.text.secondary }}>
        {subtitle}
      </p>
    </div>
  );
}