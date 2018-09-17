
## StripeAllInOneCardFormCustom

From [`StripeElements/StripeAllInOneCardFormCustom`](StripeElements/StripeAllInOneCardFormCustom)

Stripe All In One Form Custom:
Card Payment with Card Number, Date, CVC

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**children** | `Union<Array \| Object>` |  | :x: | Custom elements to be rendered with the card
**className** | `String` |  | :x: | Class name for form element
**postValidation** | `Function` |  | :x: | Promise that should be executed with token information
**preValidation** | `Function` |  | :x: | Promise that returns a validation before requestion a token
**stripe** | `Object` |  | :white_check_mark: | Stripe object - window.Stripe('publishable_key') See: https://dashboard.stripe.com/account/apikeys
**style** | `Object` |  | :x: | Custom styling see: https://stripe.com/elements



