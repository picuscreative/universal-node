import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

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
     * Svg hover content
     */
    svgHover: PropTypes.string,
    /**
     * Svg selection
     */
    selected: PropTypes.bool,
    /**
     * On click action callback
     */
    onClick: PropTypes.func,
  };

  render() {
    const {
      id, className, svg, svgHover, selected, onClick,
    } = this.props;

    return (
      <div id={id} onClick={onClick} className={className}>
        <i
          className={classNames(styles.i, className, selected ? styles.selected : '')}
          dangerouslySetInnerHTML={{
            __html: svgHover
              ? `<span class="${styles['svg-default']} ${className}">${svg}</span><span class="${
                styles['svg-hover']
              } ${className}">${svgHover}</span>`
              : svg,
          }}
        />
      </div>
    );
  }
}

export default Svg;
