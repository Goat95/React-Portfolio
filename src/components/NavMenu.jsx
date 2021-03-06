import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';
import Fade from 'react-reveal/Fade';

const NavMenuStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: var(--dark-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 2.5rem;
  }
  ul {
    li {
      list-style: none;
      display: inline-block;
      border-radius: 8px;
      transition: background-color .3s ease;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      text-decoration: none;
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .closeNavIcon {
    display: none;
  }
  @media (max-width: 768px) {
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: transform .3s ease;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <NavMenuStyles>
        <div 
          className="mobile-menu-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}  
        >
          <MdMenu />
        </div>
        <Fade left>
          <h1 className="logo">PORTFOLIO</h1>
        </Fade>
          <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
            <div 
              className="closeNavIcon" 
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              <MdClose />
            </div>
            <Fade right>
              <li>
                <NavLink 
                  to="/" 
                  exact
                  onClick={() => setShowNav(!showNav)}
                  role="button"
                  onKeyDown={() => setShowNav(!showNav)}
                  tabIndex={0}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about"
                  onClick={() => setShowNav(!showNav)}
                  role="button"
                  onKeyDown={() => setShowNav(!showNav)}
                  tabIndex={0}
                  >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/projects"
                  onClick={() => setShowNav(!showNav)}
                  role="button"
                  onKeyDown={() => setShowNav(!showNav)}
                  tabIndex={0}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/animation"
                  onClick={() => setShowNav(!showNav)}
                  role="button"
                  onKeyDown={() => setShowNav(!showNav)}
                  tabIndex={0}>
                  Animation
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact"
                  onClick={() => setShowNav(!showNav)}
                  role="button"
                  onKeyDown={() => setShowNav(!showNav)}
                  tabIndex={0}>
                  Contact
                    </NavLink>
              </li>
            </Fade>
          </ul>
      </NavMenuStyles>
    </>
  );
} 
