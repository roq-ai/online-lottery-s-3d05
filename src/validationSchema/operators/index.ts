import * as yup from 'yup';

export const operatorValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  established_date: yup.date().nullable(),
  headquarters: yup.string().nullable(),
  website: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
