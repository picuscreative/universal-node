import React from 'react';
import PropTypes from 'prop-types';

const Svg = (props) => {
  const { svg, className, ...otherProps } = props;

  return (
    <i className={ className }
      { ...otherProps }
      dangerouslySetInnerHTML={ { __html: svg } } />
  );
};

Svg.propTypes = {
  svg: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Svg;
