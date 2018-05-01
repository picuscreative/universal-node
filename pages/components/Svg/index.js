import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Svg extends PureComponent {
  render() {
    const { svg, className, ...otherProps } = this.props;

    return (
      <i className={ className }
        { ...otherProps }
        dangerouslySetInnerHTML={ { __html: svg } } />
    );
  }
}

Svg.propTypes = {
  svg: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Svg;
