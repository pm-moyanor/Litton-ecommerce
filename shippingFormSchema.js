import * as yup from 'yup';

const shippingSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  postalCode: yup
    .string()
    .required('Postal Code is required')
    .matches(/^\d{5}$/, 'Postal Code must be a 5-digit number'),
  country: yup.string().required('Country is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number can be at most 15 digits')
    .required('Phone number is required'),
});

export default shippingSchema;
