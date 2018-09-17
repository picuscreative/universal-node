
## StripeElements

From [`StripeElements`](StripeElements)

StripeElements:
Load Stripe.js and include all-in-one Stripe form

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**children** | `Union<Array \| Object>` |  | :x: | Custom elements to be rendered with the card
**className** | `String` |  | :x: | Class name for form element
**custom** | `Boolean` |  | :x: | Triggers usage of custom Stripe elements instead of React elements
**postValidation** | `Function` |  | :x: | Promise that should be executed with token information
**preValidation** | `Function` |  | :x: | Promise that returns a validation before requestion a token
**style** | `Object` |  | :x: | Custom styling in case custom prop is true see: https://stripe.com/elements



