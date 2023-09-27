import * as yup from 'yup';

export const lotteryGameValidationSchema = yup.object().shape({
  name: yup.string().nullable(),
  description: yup.string().nullable(),
  jackpot: yup.number().integer().nullable(),
  draw_date: yup.date().nullable(),
  draw_time: yup.date().nullable(),
  status: yup.string().nullable(),
  operator_id: yup.string().nullable().required(),
});
