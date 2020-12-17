import React from 'react'
import PropTypes from 'prop-types'
import s from './Button.module.css'


const Button = ({ changePage}) => (
     <button onClick={changePage} type="button" className={s.Button}>
      Load More
    </button>
  );
Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Button;