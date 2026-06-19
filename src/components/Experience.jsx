import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="relative bg-black px-6 md:px-16 lg:px-24 pb-24 pt-24 text-white border-white/10">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            <div className="max-w-6xl mx-auto space-y-10">
                <div className="about-reveal-left space-y-4 max-w-2xl">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-white/30"></span>
                        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Experience</p>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/50">
                        Building, leading, and shipping real-world solutions.
                    </h2>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">
                        Roles where I owned full product life-cycles — from ideation and prototyping to deploying scalable, production-ready systems.
                    </p>
                </div>
                <div className="space-y-6 about-reveal-right">
                    {/* Experience Item 01 */}
                    <div className="spotlight-card group relative flex flex-col gap-6 p-8 border border-white/10 rounded-3xl bg-[#050505] transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                        {/* Noise Texture */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    <span className="text-lg">01</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl text-white group-hover:text-white transition-colors">President — Atal Tinkering Laboratory (ATL)</h3>
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">ATL · 2019 — 2023</p>
                                </div>
                            </div>
                            <div className="hidden md:block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[0.6rem] uppercase tracking-[0.2em] text-emerald-400">
                                Award Winner
                            </div>
                        </div>

                        <div className="pl-0 md:pl-[4rem] space-y-4">
                            <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                                Started as a member and rose to become president of the Atal Tinkering Laboratory — built several award-winning hardware projects and led teams through national hackathons.
                            </p>
                            <ul className="space-y-2">
                                {[
                                    'Won the prestigious "Inspire Manak Awards" for "Smart-Safety Helmet" designed for construction workers — prize of ₹10,000.',
                                    'Led cross-functional teams through national-level hackathons, winning multiple competitions.',
                                    'Prototyped IoT and embedded systems solutions, developing skills in innovation and project management.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 group-hover:bg-white/60"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Experience Item 02 */}
                    <div className="spotlight-card group relative flex flex-col gap-6 p-8 border border-white/10 rounded-3xl bg-[#050505] transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                        {/* Noise Texture */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    <span className="text-lg">02</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl text-white group-hover:text-white transition-colors">Full-Stack Developer — Exanor</h3>
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">Personal Project · 2026</p>
                                </div>
                            </div>
                        </div>

                        <div className="pl-0 md:pl-[4rem] space-y-4">
                            <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                                Architected and shipped a global-ready commerce &amp; operations platform — billing, inventory, and delivery tracking functioning as one connected system across Flutter, React, and Node.js.
                            </p>
                            <ul className="space-y-2">
                                {[
                                    'Built AI-powered billing and inventory platform with 0% commission marketplace on AWS (EC2/S3).',
                                    'Reduced manual operational workload by up to 40% through real-time data sync and automation.',
                                    'Engineered secure Node.js/Express backend with JWT & RBAC auth, handling multi-tenant data at scale.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 group-hover:bg-white/60"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
