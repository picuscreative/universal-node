import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Svg:
 * Inline svg content inside `<i>`
 */
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
  /**
   * Svg content
   */
  svg: PropTypes.string.isRequired,
  /**
   * Class name for `<i>`
   */
  className: PropTypes.string,
};

export default Svg;
