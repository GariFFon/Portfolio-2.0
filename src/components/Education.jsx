import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    period: "2023 – Present",
    institution: "Lovely Professional University, Punjab, India",
    grade: "CGPA: Ongoing"
  },
  {
    degree: "Higher Secondary (12th - Science)",
    period: "2020 – 2023",
    institution: "Lovely Public Senior Secondary School, PD Vihar, New Delhi",
    grade: "Science & Mathematics"
  },
  {
    degree: "Secondary School (10th)",
    period: "2019 – 2020",
    institution: "Lovely Public Senior Secondary School, PD Vihar, New Delhi",
    grade: "Atal Tinkering Laboratory — President"
  }
];

const Education = () => {
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);
    const itemRefs = useRef([]);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return;

        itemRefs.current.forEach((item, index) => {
            gsap.fromTo(item, 
                { opacity: 0, y: 50 }, 
                {
                    opacity: 1, 
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    }
                }
            );
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="education-section" className="relative w-full bg-black flex flex-col items-center overflow-hidden py-24 md:py-32 z-10">
            {/* Background Texture - Subtle Grain */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

            {/* Ambient massive 05 background */}
            <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[-5%] top-[10%] md:top-[15%] z-0 pointer-events-none select-none text-white/[0.03] font-light" style={{ fontSize: "clamp(15rem, 40vw, 60rem)", lineHeight: 0.75, letterSpacing: "-0.05em" }}>
                05
            </div>

            <div className="w-full h-full max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                
                {/* Section Header */}
                <div className="w-full mb-16 md:mb-24">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                        <span className="w-12 h-px bg-[#c8b598]/50"></span>
                        <h3 className="text-[0.65rem] uppercase tracking-[0.4em] text-[#c8b598]/80 font-medium">Foundation</h3>
                    </div>
                    <h2 className="text-white text-5xl md:text-[5.5rem] lg:text-[7rem] font-light tracking-tighter leading-[0.9]">
                        Academic <span className="font-serif italic text-white/40">History</span>
                    </h2>
                </div>

                {/* Timeline Layout */}
                <div ref={timelineRef} className="relative w-full flex flex-col gap-16 md:gap-20 lg:-ml-4">
                    {educationData.map((item, i) => (
                        <div 
                            key={i} 
                            ref={el => itemRefs.current[i] = el}
                            className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 lg:gap-32 pb-12 md:pb-16 border-b border-white/[0.05] hover:border-white/20 transition-colors duration-700"
                        >
                            {/* Year / Period (Left) */}
                            <div className="w-full md:w-1/4 flex-shrink-0">
                                <span className="text-[#c8b598] font-mono text-sm md:text-base tracking-[0.15em] uppercase opacity-80 group-hover:opacity-100 group-hover:tracking-[0.25em] transition-all duration-500">
                                    {item.period}
                                </span>
                            </div>

                            {/* Details (Right) */}
                            <div className="w-full md:w-3/4 flex flex-col gap-3 md:gap-4">
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-500">
                                    {item.degree}
                                </h3>
                                <p className="text-base md:text-xl text-white/60 font-medium group-hover:text-white/80 transition-colors duration-500">
                                    {item.institution}
                                </p>
                                
                                <div className="mt-2 md:mt-3 overflow-hidden">
                                     <div className="inline-block px-4 pt-[0.4rem] pb-[0.35rem] bg-white/[0.02] border border-white/[0.05] group-hover:border-[#c8b598]/30 group-hover:bg-[#c8b598]/5 transition-all duration-500 rounded-sm">
                                         <span className="text-[0.65rem] md:text-[0.75rem] font-semibold tracking-widest uppercase text-white/70 group-hover:text-[#c8b598] transition-colors translate-y-px inline-block">
                                            {item.grade}
                                         </span>
                                     </div>
                                </div>
                            </div>

                            {/* Hover Overlay Arrow / Icon */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 pointer-events-none hidden md:flex items-center justify-center">
                                <span className="h-px w-16 bg-[#c8b598]/50"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
