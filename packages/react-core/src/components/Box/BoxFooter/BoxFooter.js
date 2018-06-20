import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Box/styles.css';

const propTypes = {
  /** content rendered inside the boxFooter */
  children: PropTypes.node,
  /** additional classes added to the boxFooter */
  className: PropTypes.string
};

const defaultProps = {
  children: '',
  className: ''
};

const BoxFooter = ({ children, className, ...props }) => (
  <div {...props} className={css(styles.boxFooter, className)}>
    {children}
  </div>
);

BoxFooter.propTypes = propTypes;
BoxFooter.defaultProps = defaultProps;

export default BoxFooter;
