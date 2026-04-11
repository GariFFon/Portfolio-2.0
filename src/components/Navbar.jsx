import React from 'react';
import StaggeredMenu from './ui/StaggeredMenu';
import { navLinks } from '../data/portfolioData';
import ScrollLogo from './ScrollLogo';

const Navbar = () => {
    // Map existing navLinks
    const menuItems = navLinks.map(link => ({
        label: link.label,
        link: link.href,
        ariaLabel: link.label
    }));

    // Placeholder social items from footer
    const socialItems = [
        { label: 'LinkedIn', link: '#' },
        { label: 'GitHub', link: '#' },
        { label: 'Behance', link: '#' },
        { label: 'Dribbble', link: '#' }
    ];

    return (
        <>
            <ScrollLogo />

            <StaggeredMenu
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                logo={<div className="w-[120px] md:w-[150px]"></div>} 
                extraHeaderElement={
                    <a 
                        href="/resume.pdf" 
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#c8b598] font-medium text-[0.65rem] md:text-xs tracking-[0.25em] uppercase px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-[#c8b598]/20 bg-black/80 backdrop-blur-xl hover:bg-[#c8b598]/10 hover:border-[#c8b598]/50 transition-all duration-500 pointer-events-auto"
                    >
                        Resume
                    </a>
                }
                isFixed={true}
                position="right"
                menuButtonColor="#ffffff"
                openMenuButtonColor="#ffffff"
                accentColor="#ffffff"
                colors={['#1c1c2e', '#11111c', '#050508']}
            />
        </>
    );
};

export default Navbar;