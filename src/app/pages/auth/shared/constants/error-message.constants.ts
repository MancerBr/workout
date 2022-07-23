import { passwordMinLength } from './password-min-length.constant';

export const errorMessage = {
  email: {
    required: {
      key: 'AUTH.ERRORS.EMAIL.REQUIRED',
    },
    email: {
      key: 'AUTH.ERRORS.EMAIL.INVALID',
    },
  },
  password: {
    required: {
      key: 'AUTH.ERRORS.PASSWORD.REQUIRED',
    },
    minlength: {
      key: 'AUTH.ERRORS.PASSWORD.MIN_LIMIT',
      value: passwordMinLength,
    },
    passwordCompareError: {
      key: 'AUTH.ERRORS.PASSWORD.NOT_MATCHED',
    },
  },
};
