import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Box/styles.css';

const propTypes = {
  /** content rendered inside the boxHeader */
  children: PropTypes.node,
  /** additional classes added to the boxHeader */
  className: PropTypes.string
};

const defaultProps = {
  children: '',
  className: ''
};

const BoxHeader = ({ children, className, ...props }) => (
  <div {...props} className={css(styles.boxHeader, className)}>
    {children}
  </div>
);

BoxHeader.propTypes = propTypes;
BoxHeader.defaultProps = defaultProps;

export default BoxHeader;
