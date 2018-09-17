/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isNull, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import Router from 'next/router';
import { pageRoutes } from '~/config/routes';
import Auth from '~/services/auth';
import UserActions from '~/actions/user';
import FormContainer from '~/components/FormContainer';
import Button from '~/components/Button';
import Popup from '~/components/Popup';
import PopupSimpleItem from '~/components/Popup/SimpleItem';
import { fields, groups } from '~/config/account-details';
import validateInput from '~/config/account-details/validator';
import { formValidator, bindFormFieldsWithData } from '~/utils/forms';
/* eslint-disable no-unused-vars */
import styles from './styles.scss';
/* eslint-enable no-unused-vars */

/**
 * Account Details:
 * User Account Management
 */
class AccountDetails extends Component {
  static propTypes = {
    /**
     * Update user account that will be called
     */
    update: PropTypes.func.isRequired,
    /**
     * Delete user account that will be called
     */
    delete: PropTypes.func.isRequired,
    /**
     * User that will be binded with form fields
     */
    user: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      isValid: false,
      savingChanges: false,
      renderPopup: false,
      renderedPopupItemId: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      email,
      newEmail,
      repeatEmail,
      password,
      newPassword,
      repeatPassword,
      subscribed_email,
      subscribed_post,
    } = event.target.elements;

    const { isValid, errors } = formValidator(
      {
        name,
        email,
        newEmail,
        repeatEmail,
        password,
        newPassword,
        repeatPassword,
      },
      validateInput,
    );

    if (isValid) {
      this.setState({
        savingChanges: true,
      });
      this.props
        .update({
          name: name.value,
          ...(!isEmpty(newEmail.value) && { email: newEmail.value }),
          ...(!isEmpty(newPassword.value) && { password: newPassword.value }),
          subscribed_email: subscribed_email.value === 'true',
          subscribed_post: subscribed_post.value === 'true',
        })
        .then(() => {
          const { user } = this.props;
          if (!isNull(user)) {
            this.setState({
              isValid: true,
              savingChanges: false,
            });
          }
        });
    } else {
      this.setState({
        savingChanges: false,
        errors,
      });
    }
  };

  handleChange = () => {
    this.setState({
      isValid: false,
      savingChanges: false,
      errors: {},
    });
  };

  openPopup = () => {
    this.setState({
      renderPopup: true,
      renderedPopupItemId: 'remove-account',
    });
  };

  onClosePopup = () => {
    this.setState({ renderPopup: false });
  };

  handleRemoveAccount() {
    this.props.delete().then((res) => {
      if (res) {
        this.setState({ renderedPopupItemId: 'confirm-removal' });
        Auth.clearUserState();
      }
    });
  }

  renderPopupItems() {
    const { renderedPopupItemId } = this.state;
    return [
      {
        id: 'remove-account',
        active: renderedPopupItemId === 'remove-account',
        section: (
          <PopupSimpleItem
            title={'Sure you want to delete your account?'}
            buttons={[
              {
                id: 'remove-account-yes',
                action: this.handleRemoveAccount,
                text: 'Yes',
              },
              {
                id: 'remove-account-no',
                action: this.onClosePopup,
                text: 'No',
              },
            ]}
          />
        ),
      },
      {
        id: 'confirm-removal',
        active: renderedPopupItemId === 'confirm-removal',
        hideCloseButton: true,
        section: (
          <PopupSimpleItem
            title={'Account deleted.'}
            buttons={[
              {
                id: 'confirm-removal-homepage',
                action: () => Router.push(pageRoutes.HOME_PATH),
                text: 'Homepage',
              },
            ]}
          />
        ),
      },
    ];
  }

  getSubmitState = () => {
    const { savingChanges } = this.state;
    return savingChanges ? 'Saving...' : 'Saved!';
  };

  render() {
    const { user } = this.props;
    const { errors, isValid, renderPopup } = this.state;
    const submitLabel = this.getSubmitState();

    return (
      <div>
        <FormContainer
          fields={user}
          groups={groups}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleErrors={validateInput}
          successMessage={isValid ? { valid: true, message: 'Changes saved!' } : { valid: false }}
          submitLabel={submitLabel}
          errors={errors}
          notificationBefore
        />
        <Button action={() => this.openPopup()} text="Delete Account" />
        <Popup canShow={renderPopup} onClose={this.onClosePopup} items={this.renderPopupItems()} />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: bindFormFieldsWithData(fields, user),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { user } = ownProps;
  return {
    update: currentUserData => dispatch(UserActions.update(user.id, currentUserData)),
    delete: () => UserActions.delete(user.id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
