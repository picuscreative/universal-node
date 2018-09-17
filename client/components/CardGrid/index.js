import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '~/components/Container';
import Row from '~/components/Container/Row';
import Column from '~/components/Container/Column';
import Empty from './Empty';
import styles from './styles.scss';

/**
 * CardGrid:
 * Component that renders a list of same Card elements
 * intended to also show an empty message/action when no data exists
 */
class CardGrid extends Component {
  static propTypes = {
    /**
     * Class name for the container
     */
    className: PropTypes.string,
    dataCount: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    emptyTitle: PropTypes.string,
    emptySubtitle: PropTypes.string,
    emptyAction: PropTypes.func,
    emptyText: PropTypes.string,
  };

  render() {
    const {
      className,
      dataCount,
      children,
      emptyTitle,
      emptySubtitle,
      emptyAction,
      emptyText,
    } = this.props;

    return (
      <div>
        {dataCount === null && (
          <Row className={styles.loading}>
            <Column xs="12" sm="12" md="12" lg="12">
              Loading...
            </Column>
          </Row>
        )}
        <div className={className}>
          {dataCount !== null &&
            (dataCount > 0 ? (
              <Container fluid>
                <Row>
                  <Column
                    xs="10"
                    xsOffset="1"
                    sm="10"
                    smOffset="1"
                    md="10"
                    mdOffset="1"
                    lg="10"
                    lgOffset="1"
                  >
                    {children}
                  </Column>
                </Row>
              </Container>
            ) : (
              <Empty
                title={emptyTitle}
                subtitle={emptySubtitle}
                action={emptyAction}
                text={emptyText}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default CardGrid;
