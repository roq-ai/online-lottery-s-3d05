import * as yup from 'yup';

export const gameAdministratorValidationSchema = yup.object().shape({
  first_name: yup.string().nullable(),
  last_name: yup.string().nullable(),
  hire_date: yup.date().nullable(),
  role: yup.string().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
