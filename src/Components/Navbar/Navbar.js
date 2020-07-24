import React, { useContext } from 'react';
import { Link } from '@reach/router';
import s from './navbar.module.scss';
import { QueryContext } from '../../QueryContext';

const Navbar = () => {
  const { setValue } = useContext(QueryContext);

  return (
    <div className={s.container}>
      <div className={s.titleAndLogoContainer}>
        <i className="fas fa-film fa-4x"></i>
        <Link className={s.logo} to="/">
          Movie Finder
        </Link>
      </div>
      <div className={s.searchBarContainer}>
        <input
          className={s.searchBar}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search by movie title"
        />
      </div>
      <div className={s.interactiveButtonsContainer}>
        <i className="fas fa-home"></i>
        <Link className={s.linkDescription} to="/">
          Home
        </Link>
        <Link className={s.link} to="auth">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
