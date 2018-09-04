
## FacebookLogin

From [`FacebookLogin`](FacebookLogin)

Facebook Login:
Authentication with Facebook

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**appId** | `String` |  | :white_check_mark: | Facebook App Id
**callback** | `Function` |  | :white_check_mark: | Callback triggered on element click
**children** | `Union<Array \| Object>` |  | :x: | Children elements
**fields** | `String` | `'name,email'` | :x: | Facebook fields: https://developers.facebook.com/docs/graph-api/reference/v3.1/user
**language** | `String` | `'en_US'` | :x: | Facebook language: https://developers.facebook.com/docs/accountkit/languages
**onFailure** | `Function` | `null` | :x: | Callback for custom failure situation
**scope** | `String` | `'public_profile,email'` | :x: | Facebook scope: https://developers.facebook.com/docs/facebook-login/permissions
**version** | `String` | `'v3.1'` | :x: | Facebook version: https://developers.facebook.com/docs/apps/versions



