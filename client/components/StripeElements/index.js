import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StripeProvider, Elements } from 'react-stripe-elements';
import StripeAllInOneCardForm from '~/components/StripeElements/StripeAllInOneCardForm';
import StripeAllInOneCardFormCustom from '~/components/StripeElements/StripeAllInOneCardFormCustom';

/**
 * StripeElements:
 * Load Stripe.js and include all-in-one Stripe form
 */
class StripeElements extends Component {
  constructor(props) {
    super(props);
    this.state = { stripe: null };
  }

  static propTypes = {
    /**
     * Class name for form element
     */
    className: PropTypes.string,
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
     * Triggers usage of custom Stripe elements instead of React elements
     */
    custom: PropTypes.bool,
    /**
     * Custom styling in case custom prop is true
     * see: https://stripe.com/elements
     */
    style: PropTypes.object,
  };

  componentDidMount() {
    this.loadStripe();
  }

  loadStripe = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://js.stripe.com/v3/';
    script.id = 'stripe-js';
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);
    this.stripeLoaded(script);
  };

  stripeLoaded = (script) => {
    script.addEventListener('load', () => {
      this.setState({ stripe: window.Stripe(process.env.REACT_APP_STRIPE_PUB_KEY) });
    });
  };

  render() {
    const {
      className, children, preValidation, postValidation, custom,
    } = this.props;

    return (
      this.state.stripe &&
      (custom ? (
        <StripeAllInOneCardFormCustom
          className={className}
          stripe={this.state.stripe}
          preValidation={preValidation}
          postValidation={postValidation}
          style={this.props.style}
        >
          {children}
        </StripeAllInOneCardFormCustom>
      ) : (
        <StripeProvider stripe={this.state.stripe}>
          <Elements>
            <StripeAllInOneCardForm
              className={className}
              preValidation={preValidation}
              postValidation={postValidation}
            >
              {children}
            </StripeAllInOneCardForm>
          </Elements>
        </StripeProvider>
      ))
    );
  }
}

export default StripeElements;
