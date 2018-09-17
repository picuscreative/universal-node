import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.scss';

/**
 * ItemListTable
 */
class ItemListTable extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    rows: PropTypes.array,
  };

  static defaultProps = {
    rows: [],
  };

  render() {
    const { className, rows } = this.props;

    return (
      <div>
        <table className={classNames(styles.table, className)}>
          <tbody>
            {rows &&
              rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.key && (
                    <td
                      colSpan={row.value ? 1 : 2}
                      className={classNames(row.options &&
                          row.options.bold &&
                          row.options.bold !== 'value' &&
                          styles.bold)}
                    >
                      {row.key}
                    </td>
                  )}
                  {row.value && (
                    <td
                      colSpan={row.key ? 1 : 2}
                      className={classNames(
                        row.options &&
                          row.options.bold &&
                          row.options.bold !== 'key' &&
                          styles.bold,
                        row.options &&
                          row.options.value_position &&
                          styles[row.options.value_position],
                      )}
                    >
                      {row.value}
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ItemListTable;
