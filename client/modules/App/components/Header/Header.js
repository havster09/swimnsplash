import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

// Import Images
import logo from '../../../../assets/images/logo.png';

export function Header(props, context) {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Link to="/" >
        <img className={styles.logo} src={logo} alt="Swim 'n' Splash"/>
        </Link>
        <div className={styles.max_500}>
          <h1 className={styles.tagline}>
            Book a swimming lesson and learn a skill for life.
          </h1>
        </div>
        {
          context.router.isActive('/', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
