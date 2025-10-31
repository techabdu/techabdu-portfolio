import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Github, Instagram, MessageCircle, Send, Moon, Sun, ArrowUp, ExternalLink } from 'lucide-react';
import avatarImage from './assets/avatar.png';

// ============================================
// MAIN APP COMPONENT
// ============================================
const TechabduPortfolio = () => {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  
  // Dark mode state - toggles between light and dark theme
  const [isDark, setIsDark] = useState(false);
  
  // Show/hide back-to-top button based on scroll position
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Typing animation state - controls the code typing effect in hero
  const [typedText, setTypedText] = useState('');
  
  // Full text to be typed out in hero section
  const fullText = "delivers high-impact, functional MVPs and features by directing LLMs with surgical precision.";
  
  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for scroll-based effects
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // ============================================
  // COLOR PALETTE - Based on Apple-inspired design
  // ============================================
  const colors = {
    light: {
      bg: '#F5F5F7',           // Porcelain White - main background
      cardBg: '#FFFFFF',        // Pure white for cards
      text: '#1D1D1F',          // Carbon Black - primary text
      textSecondary: '#8E8E93', // Titanium Gray - secondary text
      border: '#E5E5EA',        // Light Platinum - borders
      accent: '#6A67CE'         // Digital Lavender - accent color
    },
    dark: {
      bg: '#1D1D1F',           // Carbon Black - main background
      cardBg: '#2C2C2E',        // Slightly lighter for cards
      text: '#F5F5F7',          // Porcelain White - primary text
      textSecondary: '#8E8E93', // Titanium Gray - secondary text
      border: '#38383A',        // Darker border
      accent: '#6A67CE'         // Digital Lavender - accent color
    }
  };

  // Current theme colors based on dark mode state
  const theme = isDark ? colors.dark : colors.light;

  // ============================================
  // EFFECTS & EVENT HANDLERS
  // ============================================
  
  // Typing animation effect - types out text character by character
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50); // 50ms delay between characters
    
    return () => clearInterval(timer);
  }, []);

  // Scroll listener for back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dark mode toggle function
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  // ============================================
  // PROJECTS DATA
  // ============================================
  const projects = [
    {
      id: 1,
      name: 'iStore',
      description: 'A Multi-tenant store management system for phone shops with features such as inventory management, sales management, finance management, users management, etc.',
      tech: ['PHP (Laravel)', 'Blade'],
      url: 'https://salsabeelistore.shop/' // URL
    },

    {
      id: 2,
      name: 'A digital version of the collage library',
      description: 'A platform where users (students, lecturers, and researchers) can: Access library information resources and updates, Find digital materials like e-books and journals, Browse databases like DOAJ, ScienceDirect, etc.',
      tech: ['PHP', 'JavaScript', 'CSS'],
      url: 'https://github.com/techabdu/coezlibrary.git' // URL
    }
  ];

  // ============================================
  // TECH STACK DATA
  // ============================================
  const techStack = ['PHP', 'React', 'Python'];

  // ============================================
  // SOCIAL LINKS DATA
  // ============================================
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/techabdu' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/thetechabdu' },
    { name: 'TikTok', icon: Send, url: 'https://tiktok.com/@thetechabdu' },
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/2349022167945' }
  ];

  // ============================================
  // ANIMATION VARIANTS
  // ============================================
  
  // Fade in from bottom animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  // Staggered children animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Card hover animation
  const cardHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  // ============================================
  // FLOATING SHAPES COMPONENT
  // Decorative geometric shapes in hero section
  // ============================================
  const FloatingShapes = () => {
    // Parallax transforms for shapes
    const y1 = useTransform(smoothProgress, [0, 1], [0, -200]);
    const y2 = useTransform(smoothProgress, [0, 1], [0, -100]);
    const y3 = useTransform(smoothProgress, [0, 1], [0, -150]);

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shape 1 - Top right circle */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-5"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{ backgroundColor: theme.accent }}
          />
        </motion.div>

        {/* Shape 2 - Middle left square */}
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/2 left-10 w-48 h-48 opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className="w-full h-full"
            style={{ backgroundColor: theme.accent }}
          />
        </motion.div>

        {/* Shape 3 - Bottom right triangle */}
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-40 right-1/4 w-56 h-56 opacity-5"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className="w-full h-full"
            style={{ 
              backgroundColor: theme.accent,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        </motion.div>
      </div>
    );
  };

  // ============================================
  // ANIMATED GRID BACKGROUND COMPONENT
  // Subtle grid pattern that shifts on scroll
  // ============================================
  const AnimatedGrid = () => {
    const gridY = useTransform(smoothProgress, [0, 1], [0, 100]);

    return (
      <motion.div 
        style={{ y: gridY }}
        className="fixed inset-0 pointer-events-none opacity-10"
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke={theme.border}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>
    );
  };

  // ============================================
  // RENDER MAIN PORTFOLIO
  // ============================================
  return (
    <div 
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      {/* Animated grid background */}
      <AnimatedGrid />

      {/* ============================================
          DARK MODE TOGGLE - Fixed top right
          ============================================ */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={toggleDarkMode}
        className="fixed top-8 right-8 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110"
        style={{ 
          backgroundColor: theme.cardBg,
          boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.1)'
        }}
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <Sun size={24} style={{ color: theme.accent }} />
        ) : (
          <Moon size={24} style={{ color: theme.accent }} />
        )}
      </motion.button>

      {/* ============================================
          BACK TO TOP BUTTON - Shows on scroll
          ============================================ */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110"
        style={{ 
          backgroundColor: theme.accent,
          color: '#FFFFFF',
          boxShadow: '0 4px 20px rgba(106, 103, 206, 0.3)',
          pointerEvents: showBackToTop ? 'auto' : 'none'
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </motion.button>

      {/* ============================================
          HERO SECTION
          Main landing section with branding and animation
          ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <FloatingShapes />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Brand name with fade-in animation */}
          <motion.h1
            variants={fadeInUp}
            className="text-7xl md:text-9xl font-bold mb-6 tracking-tight"
            style={{ color: theme.text }}
          >
            techabdu
          </motion.h1>

          {/* Code typing animation container */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl p-8 mb-8 backdrop-blur-sm"
            style={{ 
              backgroundColor: isDark ? 'rgba(44, 44, 46, 0.6)' : 'rgba(255, 255, 255, 0.6)',
              border: `1px solid ${theme.border}`
            }}
          >
            <code className="text-lg md:text-xl font-mono block text-left">
              <span style={{ color: theme.accent }}>const</span>{' '}
              <span style={{ color: theme.text }}>philosophy</span>{' '}
              <span style={{ color: theme.textSecondary }}>=</span>{' '}
              <span style={{ color: '#50C878' }}>"{typedText}"</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ color: theme.accent }}
              >
                |
              </motion.span>
            </code>
          </motion.div>

          {/* Scroll indicator with bounce animation */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-2"
          >
            <span 
              className="text-sm uppercase tracking-wider"
              style={{ color: theme.textSecondary }}
            >
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
              style={{ border: `2px solid ${theme.border}` }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          ABOUT SECTION
          Introduction with avatar and tech stack
          ============================================ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            {/* Avatar image*/}
            <motion.div
              variants={fadeInUp}
              className="mb-8 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 rounded-full overflow-hidden"
                style={{ 
                  border: `3px solid ${theme.accent}`,
                  boxShadow: isDark ? '0 8px 30px rgba(106, 103, 206, 0.3)' : '0 8px 30px rgba(106, 103, 206, 0.2)'
                }}
              >
                {/* profile picture */}
                <img 
                  src={avatarImage} 
                  alt="Abdurrahman Ishaq Muhammad"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Name and introduction */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Hi, I'm Abdurrahman Ishaq Muhammad
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 leading-relaxed"
              style={{ color: theme.textSecondary }}
            >
              Software Engineer and Rapid Product Builder focusing on AI-assisted development. 
              Shifting the focus from manual syntax to architectural clarity and intent-driven execution.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-12 max-w-2xl mx-auto"
              style={{ color: theme.textSecondary }}
            >
              I use AI to build software at an incredible pace, but I never sacrifice quality for speed. 
              My focus is on taking your concept and turning it into a clean, robust, and maintainable codebase. 
              I see AI as a force multiplier, not a replacement for expert judgment. 
              Every project gets my full technical ownership, meaning I ensure the final product is not just fast to build,
              but also secure, efficient, and ready for scale.
            </motion.p>

            {/* Tech stack with breathing animations */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    y: {
                      duration: 2 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  className="px-6 py-3 rounded-full font-medium"
                  style={{
                    backgroundColor: isDark ? 'rgba(106, 103, 206, 0.15)' : 'rgba(106, 103, 206, 0.1)',
                    color: theme.accent,
                    border: `1px solid ${theme.accent}40`
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

            {/* ============================================
          VIBE CODING PHILOSOPHY SECTION
          Core principles and approach to development
          ============================================ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Section heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
              My Vibe Coding Philosophy
            </motion.h2>

            {/* Philosophy description */}
            <motion.p
              variants={fadeInUp}
              className="text-xl text-center mb-16 max-w-3xl mx-auto leading-relaxed"
              style={{ color: theme.textSecondary }}
            >
              This philosophy is how I guarantee my work delivers the speed of AI with the trust of expert engineering,
              because i believe in building with purpose and clarity. Every line of code should serve a function, 
              every design choice should enhance the experience.
            </motion.p>

            {/* Philosophy cards grid */}
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Card 1: The Commitment to Speed & Focus */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
                style={{
                  backgroundColor: isDark ? 'rgba(44, 44, 46, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                  border: `1px solid ${theme.border}`,
                  boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 8px 30px rgba(0,0,0,0.1)'
                }}
              >

                <h3 className="text-2xl font-bold mb-4">The Commitment to Speed & Focus</h3>
                <p style={{ color: theme.textSecondary }} className="leading-relaxed">
                  I've stepped off the manual coding treadmill. Why spend hours on syntax the AI can generate in seconds? 
                  My efficiency comes from treating Large Language Models (LLMs) as highly capable co-pilots, 
                  allowing me to focus 90% of my energy on the true challenges: complex architecture, strategic 
                  system design, and crystal-clear prompt engineering. This focus means we skip the boilerplate and 
                  move exponentially faster from a great idea to a working product.
                </p>
              </motion.div>

              {/* Card 2: The Commitment to Unwavering Quality */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
                style={{
                  backgroundColor: isDark ? 'rgba(44, 44, 46, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                  border: `1px solid ${theme.border}`,
                  boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 8px 30px rgba(0,0,0,0.1)'
                }}
              >

                <h3 className="text-2xl font-bold mb-4">The Commitment to Unwavering Quality</h3>
                <p style={{ color: theme.textSecondary }} className="leading-relaxed">
                  Let's be clear: AI-speed is nothing without human quality control. My Vibe Coding process means 
                  I gain speed, but I never lose technical ownership. I take full responsibility for the final product, 
                  which means every piece of AI-generated code must pass my rigorous human-in-the-loop review. 
                  This includes comprehensive testing, proactive security auditing, and architectural validation to ensure
                  the code is clean, modular, and built for scaling and long-term maintenance.
                </p>
              </motion.div>

              {/* Card 3: The Commitment to Solving the Right Problem */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
                style={{
                  backgroundColor: isDark ? 'rgba(44, 44, 46, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                  border: `1px solid ${theme.border}`,
                  boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 8px 30px rgba(0,0,0,0.1)'
                }}
              >

                <h3 className="text-2xl font-bold mb-4">The Commitment to Solving the Right Problem</h3>
                <p style={{ color: theme.textSecondary }} className="leading-relaxed">
                  The best engineering solves the right business problem. The speed I gain from AI doesn't go into 
                  my free time; it goes back into deeper iteration and feedback loops. I can spend more time focusing 
                  on the client's needs, user experience, and the high-impact features that drive measurable results. 
                  By automating the mundane, I free my mind to concentrate on the strategic decisions that truly deliver 
                  value.
                </p>
              </motion.div>
            </motion.div>

            {/* Bottom quote */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 text-center"
            >
              <blockquote 
                className="text-2xl font-light italic max-w-2xl mx-auto"
                style={{ color: theme.textSecondary }}
              >
                "The most powerful code is the code you don't have to write, but the most trusted code is the code you still review."
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PROJECTS SECTION
          3D tilt cards with glass-morphism effect
          ============================================ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Section heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-16 text-center"
            >
              Featured Projects
            </motion.h2>

            {/* Projects grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  whileHover="hover"
                  initial="rest"
                  className="group"
                >
                  <motion.div
                    variants={cardHover}
                    className="rounded-2xl p-8 h-full backdrop-blur-sm transition-all duration-300"
                    style={{
                      backgroundColor: isDark ? 'rgba(44, 44, 46, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                      border: `1px solid ${theme.border}`,
                      boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 8px 30px rgba(0,0,0,0.1)'
                    }}
                    onMouseMove={(e) => {
                      // 3D tilt effect on mouse move
                      const card = e.currentTarget;
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = (y - centerY) / 20;
                      const rotateY = (centerX - x) / 20;
                      
                      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                    }}
                    onMouseLeave={(e) => {
                      // Reset tilt on mouse leave
                      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                    }}
                  >
                    {/* Project name */}
                    <h3 className="text-2xl font-bold mb-4">
                      {project.name}
                    </h3>

                    {/* Project description */}
                    <p 
                      className="mb-6 leading-relaxed"
                      style={{ color: theme.textSecondary }}
                    >
                      {project.description}
                    </p>

                    {/* Tech stack badges with float-in animation */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainer}
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: techIndex * 0.1 }
                            }
                          }}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{
                            backgroundColor: isDark ? 'rgba(106, 103, 206, 0.2)' : 'rgba(106, 103, 206, 0.15)',
                            color: theme.accent
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* View Live button with arrow slide animation */}
                    <motion.a
                      href={project.url}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300"
                      style={{
                        backgroundColor: theme.accent,
                        color: '#FFFFFF'
                      }}
                      whileHover={{ gap: '12px' }}
                    >
                      View Live
                      <ExternalLink size={18} />
                    </motion.a>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          Call-to-action for job opportunities
          ============================================ */}
      <section className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl p-12 backdrop-blur-sm"
            style={{
              backgroundColor: isDark ? 'rgba(44, 44, 46, 0.6)' : 'rgba(255, 255, 255, 0.6)',
              border: `1px solid ${theme.border}`,
              boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 8px 30px rgba(0,0,0,0.1)'
            }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Let's Work Together
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl mb-8"
              style={{ color: theme.textSecondary }}
            >
              Open to full-stack development opportunities. Let's build something great.
            </motion.p>

            <motion.a
              variants={fadeInUp}
              href="https://wa.me/2349022167945"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
              style={{
                backgroundColor: theme.accent,
                color: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(106, 103, 206, 0.3)'
              }}
              whileHover={{ scale: 1.05, gap: '16px' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <MessageCircle size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          FOOTER SECTION
          Social links and copyright
          ============================================ */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: theme.border }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col items-center gap-8"
          >
            {/* Social links with hover animations */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-6"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: isDark ? 'rgba(106, 103, 206, 0.15)' : 'rgba(106, 103, 206, 0.1)',
                      color: theme.accent
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      backgroundColor: theme.accent,
                      color: '#FFFFFF'
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Copyright text */}
            <motion.p
              variants={fadeInUp}
              className="text-sm"
              style={{ color: theme.textSecondary }}
            >
              © 2025 techabdu. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default TechabduPortfolio;