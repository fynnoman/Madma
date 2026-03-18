'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ['start end', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // 3D rotation based on scroll
  const rotateX = useTransform(servicesProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(servicesProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  // Mouse-following particles
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      title: 'Hardware & Software',
      description: 'Beratung, Verkauf und Installation von Hard- und Software für Privatkunden und kleine Unternehmen',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Netzwerktechnik',
      description: 'Professionelle Netzwerklösungen und IT-Infrastruktur für optimale Konnektivität',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Videoüberwachung',
      description: 'Moderne Sicherheitssysteme und Überwachungslösungen für maximalen Schutz',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Smart Home',
      description: 'Intelligente Hausautomation für mehr Komfort, Sicherheit und Energieeffizienz',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Softwareentwicklung',
      description: 'Maßgeschneiderte Softwarelösungen perfekt abgestimmt auf Ihre Bedürfnisse',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Installation',
      description: 'Professionelle Installation und Inbetriebnahme Ihrer IT-Systeme vor Ort',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* PNG Background - wandernder Opacity-Effekt */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/herobackground.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.85) 40%, rgba(15, 23, 42, 0.2) 50%, rgba(15, 23, 42, 0.85) 60%, rgba(15, 23, 42, 0.85) 100%)',
            backgroundSize: '300% 100%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* 3D Animated Grid */}
        <div className="absolute inset-0 z-[1]" style={{ perspective: '1000px' }}>
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [0, 2, 0],
              rotateY: [0, -2, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="absolute inset-0 bg-slate-900/20 z-[1]" />

        <motion.div 
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']), opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ perspective: '1000px' }}
          >
            <motion.h1 
              className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-blue-400"
              style={{
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateY: [-2, 2, -2],
                rotateX: [1, -1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              MADMADE
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-4 text-white font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            IT-Dienstleistungen aus Saarbrücken
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-slate-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Ihr zuverlässiger Partner für Hardware, Software, Netzwerktechnik, 
            Videoüberwachung und Smart Home Lösungen
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#services"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-[28px] text-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200"
            >
              Unsere Leistungen
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-[28px] text-lg font-medium hover:bg-blue-50 transition-all duration-300"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-blue-400 rounded-[18px] flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-24 px-6 bg-white relative overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
              style={{
                background: 'linear-gradient(90deg, #0F172A 0%, #3B82F6 50%, #0F172A 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Unsere Leistungen
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-blue-600 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professionelle IT-Lösungen für Unternehmen und Privatkunden in Saarbrücken und Umgebung
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: '-50px' }}
                className="group"
              >
                <motion.div 
                  className="bg-white border border-slate-200 p-8 rounded-[32px] h-full relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
                    transition: { duration: 0.3 }
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <div className="text-blue-600 mb-6 w-12 h-12">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
      >
        {/* Clean Laser Beam */}
        <motion.div
          className="absolute z-20 pointer-events-none"
          style={{
            top: '-10%',
            height: '120%',
            width: '2px',
            background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.3) 15%, rgba(59, 130, 246, 1) 40%, rgba(96, 165, 250, 1) 50%, rgba(59, 130, 246, 1) 60%, rgba(59, 130, 246, 0.3) 85%, transparent 100%)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
          animate={{
            left: ['-5%', '-5%', '90%', '50%', '110%', '110%'],
          }}
          transition={{
            duration: 14,
            times: [0, 0.4, 0.6, 0.7, 0.8, 1],
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Minimaler Clean Glow */}
        <motion.div
          className="absolute w-16 z-[15] pointer-events-none"
          style={{
            top: '-10%',
            height: '120%',
            background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
            filter: 'blur(15px)',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
          animate={{
            left: ['-5%', '-5%', '90%', '50%', '110%', '110%'],
          }}
          transition={{
            duration: 14,
            times: [0, 0.4, 0.6, 0.7, 0.8, 1],
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Über MADMADE
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-8"></div>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Als Ihr zuverlässiger Partner für IT-Dienstleistungen in Saarbrücken 
                  bieten wir umfassende Lösungen in den Bereichen Hardware, Software,
                  Netzwerktechnik, Videoüberwachung und Smart Home Automation.
                </p>
                <p>
                  Mit jahrelanger Erfahrung und fundiertem Fachwissen unterstützen
                  wir Sie bei der Planung, Implementierung und Wartung Ihrer
                  IT-Infrastruktur.
                </p>
                <p>
                  Von der individuellen Softwareentwicklung bis zur
                  Installation modernster Sicherheitssysteme – wir realisieren
                  maßgeschneiderte Lösungen für Ihre Anforderungen.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-[42px] p-12 shadow-xl relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="space-y-6 relative z-10">
                  {[
                    { icon: 'M5 13l4 4L19 7', title: 'Kompetente Beratung', desc: 'Individuelle Lösungen für Ihre Anforderungen' },
                    { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Schneller Service', desc: 'Zuverlässig und termingerecht vor Ort' },
                    { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Qualität & Sicherheit', desc: 'Höchste Standards bei allen Projekten' },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-start gap-4"
                      whileHover={{ x: 10, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-700">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Matrix-style falling code */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-600 font-mono text-sm"
              style={{
                left: `${(i * 5)}%`,
                top: "-20px",
              }}
              animate={{
                y: ["0vh", "110vh"],
              }}
              transition={{
                duration: (i % 3) + 3,
                repeat: Infinity,
                ease: "linear",
                delay: (i % 5) * 0.6,
              }}
            >
              {`{${(i * 47) % 999}}`}
            </motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Kontakt
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600">
              Nehmen Sie Kontakt mit uns auf – wir freuen uns auf Ihre Anfrage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8 rounded-[32px] relative overflow-hidden"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-slate-900">Mario Dohr</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-slate-700">
                      <p className="font-medium">Adresse</p>
                      <p>Rastbachweg 20</p>
                      <p>66113 Saarbrücken</p>
                    </div>
                  </div>

                  <a
                    href="tel:0681754545"
                    className="flex items-center gap-4 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-slate-700 group-hover:text-blue-600">
                      <p className="font-medium">Telefon</p>
                      <p>0681-754545</p>
                    </div>
                  </a>

                  <a
                    href="tel:01713666687"
                    className="flex items-center gap-4 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-slate-700 group-hover:text-blue-600">
                      <p className="font-medium">Mobil</p>
                      <p>0171-3666687</p>
                    </div>
                  </a>

                  <a
                    href="mailto:m.dohr@madma.de"
                    className="flex items-center gap-4 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-slate-700 group-hover:text-blue-600">
                      <p className="font-medium">E-Mail</p>
                      <p>m.dohr@madma.de</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8 rounded-[32px] h-full relative overflow-hidden"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-slate-900">Nachricht senden</h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Ihr Name"
                      className="w-full px-5 py-3 bg-white border border-slate-200 rounded-[20px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      placeholder="ihre@email.de"
                      className="w-full px-5 py-3 bg-white border border-slate-200 rounded-[20px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telefon (optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="Ihre Telefonnummer"
                      className="w-full px-5 py-3 bg-white border border-slate-200 rounded-[20px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nachricht
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Wie können wir Ihnen helfen?"
                      className="w-full px-5 py-3 bg-white border border-slate-200 rounded-[20px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none text-slate-900"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 bg-blue-600 text-white rounded-[24px] font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 relative overflow-hidden"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      animate={{
                        x: ["-200%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span className="relative z-10">Nachricht senden</span>
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/madma-logo.png"
                alt="MADMA Logo"
                width={160}
                height={45}
                className="h-10 w-auto brightness-0 invert mb-4"
              />
              <p className="text-slate-400">
                Ihr Partner für professionelle IT-Dienstleistungen in Saarbrücken
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Hardware & Software</li>
                <li>Netzwerktechnik</li>
                <li>Videoüberwachung</li>
                <li>Smart Home</li>
                <li>Softwareentwicklung</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Rastbachweg 20</li>
                <li>66113 Saarbrücken</li>
                <li>Tel: 0681-754545</li>
                <li>Mobil: 0171-3666687</li>
                <li>m.dohr@madma.de</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p className="mb-2">© 2026 MADMADE - Mario Dohr. Alle Rechte vorbehalten.</p>
            <p className="text-sm">USt-ID: DE173951491</p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">designed by fylu - marketing <a href="https://fylumarketing.de" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">fylumarketing.de</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
