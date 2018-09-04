import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { last, find, isEmpty } from 'lodash';
import Container from '~/components/Container';
import Column from '~/components/Container/Column';
import Row from '~/components/Container/Row';
import styles from './styles.scss';

/**
 * NavigationTabs
 */
class NavigationTabs extends Component {
  constructor(props) {
    super(props);
    this.defaultTab = [...props.tabs].pop();
    this.state = {
      renderActiveTabId: null,
      renderedActiveTab: this.defaultTab,
    };
  }

  static propTypes = {
    /**
     * Tabs with items for the NavigationTabs
     */
    tabs: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.handleTabClick();
  }

  handleTabClick = (event) => {
    const { tabs } = this.props;
    let activeTab = last(tabs);

    // In case user selected manually a different tab
    if (event) {
      let id = event.target.getAttribute('data-id');
      id = id || event.target.parentNode.getAttribute('data-id');
      activeTab = find(tabs, { value: { id } });
      // In case user refreshed page with tab anchor already set
    } else if (!isEmpty(window.location.hash)) {
      activeTab = find(tabs, { value: { id: window.location.hash.substr(1) } });
    }

    if (activeTab) {
      const activeTabComponent = activeTab.value.handleTabClick();
      this.setState({
        renderedActiveTabComponent: activeTabComponent,
        renderActiveTabId: activeTab.value.id,
        renderedActiveTab: activeTab,
      });
    }
  };

  render() {
    const { tabs } = this.props;
    const { renderedActiveTabComponent, renderActiveTabId } = this.state;

    return (
      <Container fluid>
        <Row className={styles.navigation}>
          {tabs.map((tab, index) => (
            <Column
              key={`${tab.value.className}-${index}`}
              xs="12"
              sm="12"
              md="3"
              lg="3"
              alignCenter
            >
              <div>
                <Link href={tab.value.route}>
                  <a data-id={tab.value.id} onClick={this.handleTabClick}>
                    <div
                      className={
                        renderActiveTabId === tab.value.id ? styles.active : styles.inactive
                      }
                    >
                      {tab.value.name}
                    </div>
                  </a>
                </Link>
              </div>
            </Column>
          ))}
        </Row>
        <Container fluid>
          <div>{renderedActiveTabComponent}</div>
        </Container>
      </Container>
    );
  }
}

export default NavigationTabs;
