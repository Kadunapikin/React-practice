import React from 'react';

const navItems = ['home', 'about', 'contact', 'FAQ', 'help', 'blog', 'pics'];

const NavList = () => {
  return (
    <ul>
      {navItems.map((item, index) => (
        // eslint-disable-next-line
        <a href='#'>
            <li key={index}>{item}</li>
        </a>
      ))}
    </ul>
  );
};

export default NavList;
