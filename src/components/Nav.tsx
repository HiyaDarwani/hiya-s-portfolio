import React, { useState } from 'react';
import type { NavItem } from '../types';

interface NavProps {
  items: NavItem[];
  activeSection: string;
}

const Nav: React.FC<NavProps> = ({ items, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop nav */}
      <nav className="nav" aria-label="Section index">
        {items.map((item) => (
          <button
            key={item.sectionId}
            className={`nav__item ${activeSection === item.sectionId ? 'nav__item--active' : ''}`}
            onClick={() => scrollTo(item.sectionId)}
            aria-label={`Navigate to ${item.label}`}
            data-cursor={item.label}
          >
            <span className="nav__index">{item.index}</span>
            <span className="nav__line" />
            <span className="nav__label">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Mobile nav */}
      <div className="mobile-nav">
        <button
          className="mobile-nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>

        <div className={`mobile-nav__menu ${menuOpen ? 'mobile-nav__menu--open' : ''}`}>
          {items.map((item) => (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              onClick={(e) => { e.preventDefault(); scrollTo(item.sectionId); }}
            >
              <span>{item.index}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
