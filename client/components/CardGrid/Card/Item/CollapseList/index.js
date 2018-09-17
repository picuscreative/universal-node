import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * CollapseList
 */
class CollapseList extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    cardWithoutTitle: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      collapsedItemId: props.children[0].props.id,
    };
  }

  onCollapse = () => {
    this.setState((prevState, props) => ({
      collapsedItemId:
        prevState.collapsedItemId === props.children[1].props.id
          ? props.children[0].props.id
          : props.children[1].props.id,
    }));
  };

  render() {
    const { collapsedItemId } = this.state;

    const childWithProp = React.Children.map(this.props.children, (child) => {
      if (child) {
        return React.cloneElement(child, {
          onCollapse: this.onCollapse,
          cardWithoutTitle: this.props.cardWithoutTitle,
          collapsedItemId,
          className: classNames(child.props.className),
        });
      }
      return null;
    });

    return childWithProp;
  }
}

export default CollapseList;
