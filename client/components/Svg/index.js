import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Svg:
 * Inline svg content inside `<i>`
 */
class Svg extends PureComponent {
  static propTypes = {
    /**
     * Id name for `<i>`
     */
    id: PropTypes.string,
    /**
     * Class name for `<i>`
     */
    className: PropTypes.string,
    /**
     * Svg content
     */
    svg: PropTypes.string.isRequired,
    /**
     * On click action callback
     */
    onClick: PropTypes.func,
  };

  render() {
    const {
      id, className, svg, onClick,
    } = this.props;

    return (
      <div id={id} onClick={onClick} className={className}>
        <i
          dangerouslySetInnerHTML={{
            __html: svg,
          }}
        />
      </div>
    );
  }
}

export default Svg;
