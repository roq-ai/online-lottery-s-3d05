import * as yup from 'yup';

export const customerSupportRepresentativeValidationSchema = yup.object().shape({
  first_name: yup.string().nullable(),
  last_name: yup.string().nullable(),
  hire_date: yup.date().nullable(),
  department: yup.string().nullable(),
  position: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
