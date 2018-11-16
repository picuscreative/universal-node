import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Stripe All In One Form Custom:
 * Card Payment with Card Number, Date, CVC
 */
class StripeAllInOneCardFormCustom extends PureComponent {
  constructor(props) {
    super(props);
    this.elements = props.stripe.elements();
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
    /**
     * Custom styling
     * see: https://stripe.com/elements
     */
    style: PropTypes.object,
  };

  componentDidMount() {
    this.card = this.elements.create('cardNumber', {
      placeholder: 'Card Number',
      ...(this.props.style && { style: this.props.style }),
    });
    this.card.mount('#card_number');

    const exp = this.elements.create('cardExpiry', {
      placeholder: 'MM/YY',
      ...(this.props.style && { style: this.props.style }),
    });
    exp.mount('#card_expiry_date');

    const cvc = this.elements.create('cardCvc', {
      placeholder: 'CVC',
      ...(this.props.style && { style: this.props.style }),
    });
    cvc.mount('#card_cvc');
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { stripe, preValidation, postValidation } = this.props;

    const isValid = await preValidation();
    if (isValid) {
      const res = await stripe.createToken(this.card);
      await postValidation(res.token);
    }
  }

  render() {
    return (
      <form className={this.props.className} onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
    );
  }
}

export default StripeAllInOneCardFormCustom;
