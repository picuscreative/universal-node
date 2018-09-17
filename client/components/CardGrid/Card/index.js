import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import Column from '~/components/Container/Column';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import informationIcon from '~/shared/media/images/picus-logo.jpg';
import Title from './Item/Title';
import Action from './Item/Action';
import types from './types';
import styles from './styles.scss';

/**
 * Card:
 * Component that renders a card layout
 */
class Card extends Component {
  static propTypes = {
    /**
     * Class name for the container
     */
    className: PropTypes.string,
    columns: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    config: PropTypes.object,
    type: PropTypes.string,
  };

  static defaultProps = {
    config: {},
    columns: {
      xs: '12',
      sm: '12',
      md: '6',
      lg: '3',
    },
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  toggleFlipCard = (event) => {
    const selectedId = event.target.getAttribute('data-id');

    this.setState({
      selectedId,
      flipped: !this.state.flipped,
    });
  };

  renderCardType() {
    const {
      className, type, config, children,
    } = this.props;
    const { flipped, selectedId } = this.state;

    switch (type) {
      case types.LIST:
        return (
          <div className={classNames('card', styles.card, className)} data-id={config.id}>
            <div className={styles.corner}>
              {config.remove && (
                <Action
                  id={config.id}
                  iconName="close"
                  handleClick={config.remove.remove_handle_click}
                />
              )}
            </div>
            {config.title && <Title title={config.title} />}
            {children}
            {config.call_to_action && (
              <Button
                dataId={config.id}
                action={config.call_to_action.action_handle_click}
                wrapperClassname={styles['call-to-action-wrapper']}
                className={styles['call-to-action']}
                text={config.call_to_action.label}
              />
            )}
          </div>
        );
      case types.COLLAPSE: {
        const childWithProp = React.Children.map(children, (child) => {
          if (child) {
            return React.cloneElement(child, {
              cardWithoutTitle: isEmpty(config.title),
            });
          }
          return null;
        });

        return (
          <div
            className={classNames('card', styles.card, styles.large, className)}
            data-id={config.id}
          >
            <div className={styles.corner}>
              {config.remove && (
                <Action
                  id={config.id}
                  iconName="close"
                  handleClick={config.remove.remove_handle_click}
                />
              )}
            </div>
            {config.title && <Title title={config.title} />}
            {childWithProp}
          </div>
        );
      }
      case types.SIMPLE:
        return (
          <div
            className={classNames('card', styles.card, styles[config.size], className)}
            data-id={config.id}
          >
            <div className={classNames(styles.corner, config.select && styles.transparent)}>
              {config.select && (
                <Checkbox
                  checkboxContainerClassName={styles.checkboxContainer}
                  placeholder=""
                  name={config.select.select_handle_name}
                  value={config.select.select_handle_value}
                  checked={config.select.select_handle_value}
                  onChange={config.select.select_handle_change}
                />
              )}
              {config.remove && (
                <Action
                  id={config.id}
                  iconName="close"
                  handleClick={config.remove.remove_handle_click}
                />
              )}
            </div>
            {config.title && <Title className={styles.title} title={config.title} />}
            {children}
          </div>
        );
      case types.FLIP:
        return (
          <div
            className={classNames(
              styles['flipper-wrapper'],
              flipped && styles.flipped,
              flipped && selectedId === config.id && styles.flipped,
            )}
          >
            <div className={styles.flipper}>
              <div className={classNames(styles['front-corner'], styles.corner)}>
                <Action
                  id={config.id}
                  iconSvg={informationIcon}
                  handleClick={this.toggleFlipCard}
                />
              </div>
              <div
                className={classNames('card', styles.card, styles.large, styles.front, className)}
                data-id={config.id}
              >
                {config.title && <Title title={config.title} />}
                {config.front}
                {config.call_to_action && (
                  <Button
                    dataId={config.id}
                    action={config.call_to_action.action_handle_click}
                    wrapperClassname={styles['call-to-action-wrapper']}
                    className={styles['call-to-action']}
                    text={config.call_to_action.label}
                  />
                )}
              </div>
              <div className={classNames(styles['back-corner'], styles.corner)}>
                <Action id={config.id} iconName="close" handleClick={this.toggleFlipCard} />
              </div>
              <div className={classNames('card', styles.card, styles.back, className)}>
                {config.back}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    const { columns } = this.props;
    return (
      <Column {...columns} alignCenter>
        {this.renderCardType()}
      </Column>
    );
  }
}

export default Card;
