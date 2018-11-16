import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CardElement, injectStripe } from 'react-stripe-elements';

/**
 * Stripe All In One Form:
 * Card Payment with Card Number, Date, CVC
 */
class StripeAllInOneCardForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    /**
     * Class name for form element
     */
    className: PropTypes.string,
    /**
     * Stripe object - window.Stripe('publishable_key')
     * See: https://dashboard.stripe.com/account/apikeys
     */
    stripe: PropTypes.object.isRequired,
    /**
     * Custom elements to be rendered with the card
     */
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    /**
     * Promise that returns a validation before requestion a token
     */
    preValidation: PropTypes.func,
    /**
     * Promise that should be executed with token information
     */
    postValidation: PropTypes.func,
  };

  async handleSubmit(e) {
    e.preventDefault();
    const { stripe, preValidation, postValidation } = this.props;

    const isValid = await preValidation();
    if (isValid) {
      const res = await stripe.createToken();
      await postValidation(res.token);
    }
  }

  render() {
    return (
      <form className={this.props.className} onSubmit={this.handleSubmit}>
        <CardElement hidePostalCode={true} />
        {this.props.children}
      </form>
    );
  }
}

export default injectStripe(StripeAllInOneCardForm);
