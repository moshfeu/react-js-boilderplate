import React from 'react';
import { Link } from '@reach/router';
import s from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={s.container}>
      <div className={s.titleAndLogoContainer}>
        <i className="fas fa-film fa-4x"></i>
        <h2 className={s.logo}>Movie Finder</h2>
      </div>
      <div className={s.searchBar}>
        <input
          className={s.searchBar}
          type="text"
          placeholder="Search by movie title"
        />
        <i className="fas fa-search"></i>
      </div>
      <div className={s.interactiveButtonsContainer}>
        <i className="fas fa-home"></i>
        <h3 className={s.linkDescription}>Home</h3>
        <Link className={s.link} to="auth">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
