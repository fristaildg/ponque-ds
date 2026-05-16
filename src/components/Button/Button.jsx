import React from 'react';

import PropTypes from 'prop-types';

import './Button.css';
import { AddIcon } from './icons/AddIcon.jsx';
import { HeartIcon } from './icons/HeartIcon.jsx';
import { SpinnerIcon } from './icons/SpinnerIcon.jsx';

export function Button({
  variant = 'primary',
  size = 'default',
  loading = false,
  disabled = false,
  showIconLeft = true,
  showIconRight = true,
  iconLeft,
  iconRight,
  children = 'Añadir al carrito',
  type = 'button',
  className,
  ...props
}) {
  const isDisabled = disabled || loading;

  const wrapperClass = ['pq-button-wrapper', className].filter(Boolean).join(' ');

  const buttonClass = [
    'pq-button',
    `pq-button--${variant}`,
    size === 'small' && 'pq-button--small',
    loading && 'pq-button--loading',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={wrapperClass}>
      <button
        type={type}
        className={buttonClass}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...props}
      >
        <span className="pq-button__inner">
          {loading ? (
            <SpinnerIcon className="pq-button__icon pq-button__icon--spinner" />
          ) : (
            <>
              {showIconLeft &&
                (iconLeft ?? <AddIcon className="pq-button__icon" />)}
              {children != null && children !== '' && (
                <span className="pq-button__label">{children}</span>
              )}
              {showIconRight &&
                (iconRight ?? <HeartIcon className="pq-button__icon" />)}
            </>
          )}
        </span>
      </button>
    </span>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger']),
  size: PropTypes.oneOf(['default', 'small']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  showIconLeft: PropTypes.bool,
  showIconRight: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};
