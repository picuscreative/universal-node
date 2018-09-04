import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { pick, isEmpty } from 'lodash';
import Button from '~/components/Button';
import Container from '~/components/Container';
import Column from '~/components/Container/Column';
import Row from '~/components/Container/Row';
import Checkbox from '~/components/Checkbox';
import styles from './styles.scss';

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.hasError = false;
  }

  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    submitLabel: PropTypes.string,
    fields: PropTypes.object.isRequired,
    groups: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    single: PropTypes.bool,
    white: PropTypes.bool,
    successMessage: PropTypes.object,
    notificationBefore: PropTypes.bool,
  };

  static defaultProps = {
    notificationBefore: true,
  };

  static createField(name, field, onChange) {
    const { type, value, placeholder } = field;
    const props = {
      name,
      onChange,
      placeholder,
      value,
      autoComplete: name,
    };

    let { className } = field;
    className = !isEmpty(className) ? styles[className] : '';

    switch (type) {
      case 'email':
        return <input className={classNames(styles.input, className)} type="email" {...props} />;
      case 'password':
        return <input className={classNames(styles.input, className)} type="password" {...props} />;
      case 'checkbox':
        return <Checkbox className={className} {...props} />;
      default:
        return <input className={classNames(styles.input, className)} type="text" {...props} />;
    }
  }

  renderElementsPerGroup(group) {
    const { fields } = this.props;
    return group.subgroups.map((subGroup, subGroupIndex) => (
      <div key={`${subGroup.id}-${subGroupIndex}`} className={styles.group}>
        {!isEmpty(subGroup.title) && <h3 className={styles.subgroupTitle}>{subGroup.title}</h3>}
        {!isEmpty(subGroup.label) && <span className={styles.subgroupLabel}>{subGroup.label}</span>}
        {this.renderElements(pick(fields, subGroup.fields))}
      </div>
    ));
  }

  renderElements(fields) {
    const { onChange } = this.props;
    const formFields = isEmpty(fields) ? this.props.fields : fields;

    return Object.keys(formFields).map((fieldName, index) => {
      const { isValid, error } = formFields[fieldName].errors;
      const { type } = formFields[fieldName];

      if (this.hasError === false) {
        this.hasError = !isValid && error;
      }

      return (
        <div
          className={(!isValid ? styles.error : '', styles[`${type}-field-type`])}
          key={`${fieldName}-${index}`}
        >
          {Form.createField(fieldName, formFields[fieldName], onChange)}
        </div>
      );
    });
  }

  renderNotification(isValidMessage) {
    const { single } = this.props;
    return (
      <div>
        <div className={classNames(styles.warning, styles.error, single ? styles.limit : '')}>
          {this.hasError}
        </div>
        {single && (
          <div
            id="notification"
            className={classNames(styles.label, this.hasError ? styles.error : styles.valid)}
            dangerouslySetInnerHTML={{
              __html: single && this.hasError ? this.hasError : isValidMessage,
            }}
          />
        )}
      </div>
    );
  }

  render() {
    const {
      id,
      className,
      submitLabel,
      groups,
      onSubmit,
      single,
      white,
      successMessage,
      notificationBefore,
    } = this.props;
    let isValidMessage = '';
    this.hasError = false;

    if (successMessage !== undefined) {
      isValidMessage = successMessage.message;
    }

    return (
      <div
        className={classNames(
          className,
          single ? styles.single : styles.normal,
          groups.length > 0 && styles.hasGroups,
          styles.form,
          white && styles.white,
        )}
      >
        <form id={id || 'form'} onSubmit={onSubmit} noValidate>
          {groups.length > 0 ? (
            <Container fluid>
              <Row>
                {groups.map((group, index) => (
                  <Column
                    xs={group.className.xs}
                    sm={group.className.sm}
                    md={group.className.md}
                    lg={group.className.lg}
                    key={index}
                    className={styles.column}
                  >
                    {this.renderElementsPerGroup(group)}
                  </Column>
                ))}
              </Row>
            </Container>
          ) : (
            this.renderElements()
          )}

          {notificationBefore && <div>{this.renderNotification(isValidMessage)}</div>}
          <div className={styles['submit-wrapper']}>
            <div
              className={classNames(styles['submit-wrapper-relative'], single ? styles.center : '')}
            >
              <Button text={submitLabel} type="submit" noHover={white} />
            </div>
          </div>
          {!notificationBefore && <div>{this.renderNotification(isValidMessage)}</div>}
        </form>
      </div>
    );
  }
}

export default Form;
