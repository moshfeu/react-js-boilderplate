import React, { useContext } from 'react';
import s from './footer.module.scss';
import { QueryContext } from '../../QueryContext';
const Footer = () => {
  const { value } = useContext(QueryContext);

  return (
    <div className={s.footer}>
      <h1>{value}</h1>
    </div>
  );
};

export default Footer;
