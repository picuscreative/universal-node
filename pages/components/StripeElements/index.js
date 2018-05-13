import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import StripeAllInOneCardForm from '../StripeAllInOneCardForm';

/**
* StripeElements:
* Load Stripe.js and include all-in-one Stripe form
*/
class StripeElements extends Component {
  constructor(props) {
    super(props);
    this.state = { stripe: null };

    if (process.browser) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://js.stripe.com/v3/';
      script.id = 'stripe-js';
      script.async = true;
      document.getElementsByTagName('head')[0].appendChild(script);
      this.onLoadStripe(script);
    }

    this.onLoadStripe = this.onLoadStripe.bind(this);
  }

  onLoadStripe(script) {
    script.addEventListener('load', () => {
      this.setState({ stripe: window.Stripe(process.env.REACT_APP_STRIPE_PUB_KEY) });
    });
  }

  render() {
    return (
      this.state.stripe ? (<StripeProvider stripe={this.state.stripe}>
        <Elements>
          <StripeAllInOneCardForm />
        </Elements>
      </StripeProvider>) : null
    );
  }
}

export default StripeElements;
