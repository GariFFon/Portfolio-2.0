import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

const LOREM_IPSUM = [
  "From the onset, the ambition was clear: craft an experience that transcends utility. We deconstructed the core user journey, removing friction points to unearth a seamless flow. It wasn't just about placing elements on a screen; it was about orchestrating a rhythmic interaction between the user and the system.",
  "Through rigorous prototyping and numerous iterations, we landed on a visual language that speaks in whispers rather than shouts. The typography was selected to provide maximum legibility while maintaining a sophisticated, editorial aura. Every micro-interaction is deliberately tuned to offer tactile, instant feedback.",
  "The technical architecture mirrors the design's elegance. By decoupling the presentation layer and utilizing a headless approach, performance is snappy. Animations are hardware-accelerated, ensuring that the visual narrative flows like a cinematic sequence, completely uninterrupted."
];

function PremiumProjectContent({
  project,
  index,
  onNavigate,
  animateIn,
  totalProjects
}) {
  const contentRef = useRef(null);
  const heroTextRef = useRef(null);
  const hasAnimated = useRef(false);

  const prevIndex = index > 0 ? index - 1 : null;
  const nextIndex = index < totalProjects - 1 ? index + 1 : null;

  useEffect(() => {
    if (!animateIn || hasAnimated.current) return;
    hasAnimated.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      if (contentRef.current) gsap.set(contentRef.current.querySelectorAll("[data-reveal]"), { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Hero text massive entrance
      gsap.fromTo(
        heroTextRef.current.querySelectorAll('.hero-anim'),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.1, delay: 0.4 }
      );

      // Scroll content entrance
      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll("[data-reveal]");
        gsap.fromTo(items, 
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.6 }
        );
      }
    });

    return () => ctx.revert();
  }, [animateIn]);

  return (
    <div style={{ opacity: animateIn ? 1 : 0, transition: "opacity 0.6s ease" }} className="w-full bg-black min-h-screen text-white">
      
      {/* ── Premium Hero Area ── */}
      <div className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden flex flex-col justify-end bg-black">
        {/* Deep immersive image */}
        <div className="absolute inset-0 w-full h-full scale-[1.03] origin-center">
          <img
            src={project.image || `https://picsum.photos/1920/1080?random=${index + 99}`}
            alt={project.title}
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        
        {/* Signature Yash gradient to top */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 100%)" }} />
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)" }} />

        {/* Ambient massive number background */}
        <div className="absolute bottom-10 right-10 z-0 pointer-events-none select-none text-white/5 font-light" style={{ fontSize: "clamp(12rem, 30vw, 25rem)", lineHeight: 0.75, letterSpacing: "-0.05em" }}>
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hero Title & Info */}
        <div ref={heroTextRef} className="relative z-20 w-full px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-7xl">
          <div className="overflow-hidden mb-6">
            <h1 className="hero-anim font-light tracking-tight text-white leading-[0.9]" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
              {project.title}
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <div className="hero-anim flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                <p className="text-sm tracking-[0.2em] text-white/70 uppercase">Design & Engineering</p>
              </div>
              <div className="hidden md:block w-12 h-px bg-white/20" />
              <p className="text-xl md:text-2xl font-light text-white/90 max-w-xl leading-relaxed">
                {project.summary}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Fluid Editorial Content ── */}
      <div ref={contentRef} id="premium-content" className="w-full relative z-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
            
            {/* The Narrative (Left Column) */}
            <div className="lg:col-span-7 pr-0 lg:pr-12">
              <div data-reveal className="mb-20 relative">
                <h3 className="text-[0.65rem] uppercase tracking-[0.4em] text-white/30 mb-10 flex items-center gap-6">
                  <span className="w-10 h-px bg-white/10"></span>
                  The Narrative
                </h3>
                <div className="space-y-12">
                  {LOREM_IPSUM.map((text, i) => (
                    <p key={i} className={i === 0 ? "text-[1.35rem] md:text-2xl font-light leading-[1.75] text-white/90 tracking-wide" : "text-base md:text-[1.15rem] font-light leading-[1.85] text-white/50 tracking-wide"}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
              
              <div data-reveal className="mt-20 border-l border-[#00e5ff]/30 pl-8 md:pl-12 relative">
                <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.8)]" />
                <h3 className="text-[0.65rem] uppercase tracking-[0.4em] text-[#00e5ff]/70 mb-6">Outcome Definition</h3>
                <p className="text-xl md:text-3xl font-light leading-snug text-white/90 tracking-wide">
                  {project.result}
                </p>
              </div>
            </div>

            {/* Metrics & Stack (Right Column) */}
            <div className="lg:col-span-5 lg:pl-16 relative flex flex-col gap-20">
              
              {/* Innovative Glowing Comet Track Restyled to minimalist guiding light */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-transparent">
                <div 
                  id="comet-track"
                  className="w-[2px] -ml-[0.5px] transition-all duration-75 relative"
                  style={{ 
                    height: '0%',
                    background: 'transparent',
                  }}
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-[#00e5ff] rounded-full shadow-[0_0_15px_5px_rgba(0,229,255,0.8),0_0_30px_10px_rgba(0,229,255,0.4)]" />
                </div>
              </div>

              <div data-reveal>
                <h3 className="text-[0.65rem] uppercase tracking-[0.4em] text-white/40 mb-8">Technologies</h3>
                <div className="flex flex-wrap gap-4">
                  {project.stack && project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-5 py-2.5 rounded-full text-[0.65rem] uppercase tracking-[0.2em] text-white/60 bg-[#0a0a0a] border border-white/5 hover:border-white/20 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div data-reveal>
                <h3 className="text-[0.65rem] uppercase tracking-[0.4em] text-white/40 mb-6">Core Focus</h3>
                <p className="text-base text-white/60 font-light tracking-wide leading-relaxed">
                  Experience Architecture, Interactive WebGL, Motion Systems, and System Engineering.
                </p>
              </div>
              
              <div data-reveal>
                <h3 className="text-[0.65rem] uppercase tracking-[0.4em] text-white/40 mb-6">Date</h3>
                <p className="text-sm text-white/80 font-light tracking-widest">2028</p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Immersive Visual Gallery ── */}
        <div className="w-full pb-32 md:pb-48">
          <div data-reveal className="w-full px-6 md:px-16 lg:px-24 mb-12 md:mb-16">
             <div className="w-full relative overflow-hidden rounded-2xl bg-[#050505] border border-white/10 group hover:border-white/20 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Inner Ambient Shadow for Premium Feel */}
                <div className="absolute inset-0 pointer-events-none z-10 rounded-2xl ring-1 ring-inset ring-white/5 opacity-50" />
                
                {project.galleryVideo ? (
                  <div className="w-full aspect-video flex items-center justify-center bg-black">
                    <video
                      src={project.galleryVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain opacity-100"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[60vh] md:h-[80vh]">
                    <img
                      src={`https://picsum.photos/1920/1080?random=${index + 100}`}
                      alt="Full showcase"
                      className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
             </div>
          </div>


          <div data-reveal className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-6 md:px-16 lg:px-24">
             <div className="w-full aspect-[4/5] relative overflow-hidden rounded-2xl bg-[#050505] border border-white/10 group hover:border-white/20 transition-all duration-700 shadow-2xl">
                <div className="absolute inset-0 pointer-events-none z-10 rounded-2xl ring-1 ring-inset ring-white/5 opacity-40" />
                {project.galleryVideo2 ? (
                    <div className="absolute inset-0 flex items-center justify-center p-20 lg:p-28">
                        <video
                            src={project.galleryVideo2}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] ring-1 ring-white/10 transition-transform duration-1000 group-hover:scale-[1.02]"
                        />
                    </div>
                ) : (
                    <img
                      src={`https://picsum.photos/1000/1200?random=${index + 200}`}
                      alt="Detail view 1"
                      className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                )}
             </div>
             <div className="w-full aspect-[4/5] relative overflow-hidden rounded-2xl bg-[#050505] border border-white/10 group hover:border-white/20 transition-all duration-700 shadow-2xl">
                <div className="absolute inset-0 pointer-events-none z-10 rounded-2xl ring-1 ring-inset ring-white/5 opacity-40" />
                {project.galleryVideo3 ? (
                    <div className="absolute inset-0 flex items-center justify-center p-20 lg:p-28">
                        <video
                            src={project.galleryVideo3}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] ring-1 ring-white/10 transition-transform duration-1000 group-hover:scale-[1.02]"
                        />
                    </div>
                ) : (
                    <img
                      src={`https://picsum.photos/1000/1200?random=${index + 300}`}
                      alt="Detail view 2"
                      className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                )}
             </div>
          </div>
        </div>

        {/* ── Majestic Navigation Footer ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[40vh] border-t border-white/10 bg-[#050505]">
          {/* Previous Slot */}
          <div 
            data-reveal 
            className={`relative flex flex-col items-center justify-center p-12 group transition-all duration-700 ${prevIndex !== null ? 'cursor-pointer hover:bg-white/[0.03]' : 'opacity-10 cursor-default'}`}
            onClick={() => prevIndex !== null && onNavigate(prevIndex)}
          >
            {prevIndex !== null && (
              <>
                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/40 mb-4 group-hover:text-white transition-colors duration-500">Back Project</p>
                <h4 className="text-3xl md:text-5xl font-light tracking-tight text-white/40 group-hover:text-white transition-colors duration-500">
                  {String(prevIndex + 1).padStart(2, '0')}
                </h4>
                <div className="mt-8 transform -rotate-180 group-hover:-translate-x-2 transition-transform duration-500 text-white/20 group-hover:text-white">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                  </svg>
                </div>
              </>
            )}
          </div>

          {/* Next Slot */}
          <div 
            data-reveal 
            className={`relative flex flex-col items-center justify-center p-12 group border-t md:border-t-0 md:border-l border-white/10 transition-all duration-700 ${nextIndex !== null ? 'cursor-pointer hover:bg-white/[0.03]' : 'opacity-10 cursor-default'}`}
            onClick={() => nextIndex !== null && onNavigate(nextIndex)}
          >
            {nextIndex !== null && (
              <>
                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/40 mb-4 group-hover:text-white transition-colors duration-500">Next Project</p>
                <h4 className="text-3xl md:text-5xl font-light tracking-tight text-white/40 group-hover:text-white transition-colors duration-500">
                  {String(nextIndex + 1).padStart(2, '0')}
                </h4>
                <div className="mt-8 group-hover:translate-x-2 transition-transform duration-500 text-white/20 group-hover:text-white">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}

// ─── Overlay shell ───

export default function ProjectOverlay({
  activeProjectIndex,
  onClose,
  projects,
}) {
  const overlayRef = useRef(null);
  const scrimRef = useRef(null);
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const tlRef = useRef(null);
  const [isInDom, setIsInDom] = useState(false);
  const [displayedIndex, setDisplayedIndex] = useState(null);
  const isClosingRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeProjectIndex === null || isClosingRef.current) return;
    setDisplayedIndex(activeProjectIndex);
    setIsInDom(true);
  }, [activeProjectIndex]);

  // ── Cinematic open animation ──
  useEffect(() => {
    if (!isInDom || !panelRef.current || !scrimRef.current) return;

    // Lock scrolling
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.setAttribute('data-lenis-prevent', 'true');

    // Wait one frame so React has committed the DOM — kills the stutter
    requestAnimationFrame(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });
      tlRef.current = tl;

      // 1. Dark scrim rises from nothing
      tl.fromTo(
        scrimRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.45, ease: "power2.out" },
        0
      );

      // 2. Panel dramatically rises from the bottom with a slight overshoot
      tl.fromTo(
        panelRef.current,
        {
          y: "100vh",
          scale: 0.92,
          borderRadius: "32px",
          opacity: 0,
        },
        {
          y: "0vh",
          scale: 1,
          borderRadius: "0px",
          opacity: 1,
          duration: 1.0,
          ease: "expo.out",
        },
        0.1 // slight overlap with scrim
      );

      // 3. Close button fades in at the end
      if (closeBtnRef.current) {
        tl.fromTo(
          closeBtnRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          0.65
        );
      }
    });
  }, [isInDom]);

  useEffect(() => {
    if (panelRef.current && displayedIndex !== null) {
      panelRef.current.scrollTop = 0;
    }
  }, [displayedIndex]);

  // ── Cinematic close — reverse the drama ──
  function doClose() {
    if (isClosingRef.current || !panelRef.current) return;
    isClosingRef.current = true;

    // Kill any running tweens on panel
    gsap.killTweensOf(panelRef.current);
    gsap.killTweensOf(scrimRef.current);
    if (closeBtnRef.current) gsap.killTweensOf(closeBtnRef.current);

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.documentElement.removeAttribute('data-lenis-prevent');
        isClosingRef.current = false;
        tlRef.current = null;
        setIsInDom(false);
        setDisplayedIndex(null);
        if (onClose) onClose();
      },
    });

    // 1. Close button vanishes first
    if (closeBtnRef.current) {
      tl.to(closeBtnRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.25,
        ease: "power3.in",
      }, 0);
    }

    // 2. Panel sinks back down cinematically
    tl.to(panelRef.current, {
      y: "100vh",
      scale: 0.92,
      borderRadius: "32px",
      opacity: 0,
      duration: 0.85,
      ease: "expo.in",
    }, 0.05);

    // 3. Scrim fades out
    tl.to(scrimRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    }, 0.45);
  }

  if (!isInDom || !mounted) return null;

  const project = displayedIndex !== null ? projects[displayedIndex] : null;

  return createPortal(
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 99998 }}>
      {/* ── Dark cinematic scrim ── */}
      <div
        ref={scrimRef}
        className="pointer-events-auto"
        onClick={doClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.85)",
          opacity: 0,
        }}
      />

      {/* ── Main panel ── */}
      <div
        ref={panelRef}
        className="project-overlay pointer-events-auto"
        data-lenis-prevent="true"
        onScroll={() => {
          const content = document.getElementById('premium-content');
          if (content) {
            const rect = content.getBoundingClientRect();
            const triggerOffset = window.innerHeight * 0.4;
            const scrolled = Math.max(0, triggerOffset - rect.top);
            const total = rect.height - window.innerHeight * 0.4;
            const p = total > 0 ? Math.max(0, Math.min(1, scrolled / total)) : 0;
            const track = document.getElementById('comet-track');
            if (track) {
              track.style.height = `${p * 100}%`;
            }
          }
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: "#030303",
          overflowY: "auto",
          overflowX: "hidden",
          overscrollBehavior: "contain",
          cursor: "none",
          // Start offscreen — GSAP takes over immediately
          transform: "translateY(100vh) scale(0.92)",
          borderRadius: "32px",
          opacity: 0,
          willChange: "transform, opacity, border-radius",
        }}
      >
        {/* Overlay ref for legacy compatibility */}
        <div ref={overlayRef}>
          {project && (
            <PremiumProjectContent
              key={displayedIndex}
              index={displayedIndex}
              totalProjects={projects.length}
              project={project}
              onNavigate={(newIndex) => { setDisplayedIndex(newIndex); }}
              animateIn={true}
            />
          )}
        </div>
      </div>

      {/* ── Fixed close button ── */}
      <div className="pointer-events-auto">
        <button
          ref={closeBtnRef}
          onClick={doClose}
          style={{
            opacity: 0,
            transform: "translateY(-20px)",
            position: "fixed",
            top: "2rem",
            right: "2rem",
            zIndex: 99999,
            cursor: "none",
          }}
          className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 backdrop-blur-2xl transition-all duration-300 group active:scale-95"
        >
          <span className="text-[0.7rem] uppercase tracking-[0.25em] font-medium text-white/50 group-hover:text-white transition-colors">Close</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-white/40 group-hover:text-white transition-colors">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  );
}
