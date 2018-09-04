export const fields = {
  real_name: {
    type: 'text',
    value: '',
    placeholder: 'Name',
    isDirty: false,
  },
  email: {
    type: 'email',
    value: '',
    placeholder: 'Email',
    isDirty: false,
  },
  newEmail: {
    type: 'email',
    value: '',
    placeholder: 'New Email',
    isDirty: false,
  },
  repeatEmail: {
    type: 'email',
    value: '',
    placeholder: 'Re-enter Email',
    isDirty: false,
  },
  password: {
    type: 'password',
    value: '',
    placeholder: 'Password',
    isDirty: false,
  },
  newPassword: {
    type: 'password',
    value: '',
    placeholder: 'New Password',
    isDirty: false,
  },
  repeatPassword: {
    type: 'password',
    value: '',
    placeholder: 'Re-enter Password',
    isDirty: false,
  },
  subscribed_email: {
    type: 'checkbox',
    value: false,
    placeholder: 'Email',
    isDirty: false,
  },
  subscribed_post: {
    type: 'checkbox',
    value: false,
    placeholder: 'Post',
    isDirty: false,
  },
};

export const groups = [
  {
    className: {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
    },
    subgroups: [
      {
        id: 'name',
        title: 'Name',
        fields: ['real_name'],
      },
      {
        id: 'updateEmail',
        title: 'Update Email',
        fields: ['email', 'newEmail', 'repeatEmail'],
      },
    ],
  },
  {
    className: {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
    },
    subgroups: [
      {
        id: 'updatePassword',
        title: 'Update Password',
        fields: ['password', 'newPassword', 'repeatPassword'],
      },
      {
        id: 'newsletter',
        title: '',
        label: 'Select if you wish to subscribe to our newsletter.',
        fields: ['subscribed_email', 'subscribed_post'],
      },
    ],
  },
];
