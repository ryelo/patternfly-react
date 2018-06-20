import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Box/styles.css';

const propTypes = {
  /** content rendered inside the boxBody */
  children: PropTypes.node,
  /** additional classes added to the boxBody */
  className: PropTypes.string
};

const defaultProps = {
  children: '',
  className: ''
};

const BoxBody = ({ children, className, ...props }) => (
  <div {...props} className={css(styles.boxBody, className)}>
    {children}
  </div>
);

BoxBody.propTypes = propTypes;
BoxBody.defaultProps = defaultProps;

export default BoxBody;
