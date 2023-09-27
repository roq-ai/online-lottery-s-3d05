import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  first_name: yup.string().nullable(),
  last_name: yup.string().nullable(),
  date_of_birth: yup.date().nullable(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  country: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
