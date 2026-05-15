import * as Yup from 'yup';

export const registerValidation = Yup.object().shape({
  fullName: Yup.string().trim().required('Full name required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters')
    .required('Password required'),
});

export const loginValidation = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email required'),

  password: Yup.string().required('Password required'),
});
