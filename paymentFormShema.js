import * as Yup from 'yup';

const paymentSchema = Yup.object().shape({
  paymentMethod: Yup.string().required('Payment method is required'),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, 'Invalid card number')
    .required('Card number is required'),
  cardHolder: Yup.string().required('Cardholder name is required'),
  expirationDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiration date (MM/YY)')
    .required('Expiration date is required'),
  cvv: Yup.string()
    .matches(/^\d{3}$/, 'Invalid CVV')
    .required('CVV is required'),
});

export default paymentSchema;
