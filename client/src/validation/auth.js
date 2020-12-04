import * as Yup from 'yup';

export const login = Yup.object({
  email: Yup.string().email('Enter a valid email address').required('Enter a valid email address'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const registration = Yup.object({
  firstName: Yup.string()
    .min(2, 'First Name must be at least 2 characters')
    .required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Enter a valid email address'),
  password: Yup.string().min(6).required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  companyName: Yup.string(),
  dob: Yup.date().required('Date of Birth is required'),
  country: Yup.string().required(),
  state: Yup.string().required(),
  city: Yup.string().required(),
  specialty: Yup.string().required(),
  otherSpecialty: Yup.string().when('specialty', {
    is: 'Other',
    then: Yup.string().required('Specialty is required'),
  }),
});
