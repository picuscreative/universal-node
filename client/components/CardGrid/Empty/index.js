import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '~/components/Container';
import Row from '~/components/Container/Row';
import Button from '~/components/Button';
import styles from './styles.scss';

/**
 * Empty:
 * Component that renders a list an empty state for CardGrid
 */
class Empty extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    action: PropTypes.func,
    text: PropTypes.string,
  };

  render() {
    const {
      title, subtitle, action, text,
    } = this.props;

    return (
      <Container fluid>
        <Row className={styles.content}>
          <div>{"Oops! There's nothing in here"}</div>
          <div>
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
          <div>
            <Button action={action} text={text} />
          </div>
        </Row>
      </Container>
    );
  }
}

export default Empty;
