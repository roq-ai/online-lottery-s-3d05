import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getLotteryGameById, updateLotteryGameById } from 'apiSdk/lottery-games';
import { lotteryGameValidationSchema } from 'validationSchema/lottery-games';
import { LotteryGameInterface } from 'interfaces/lottery-game';
import { OperatorInterface } from 'interfaces/operator';
import { getOperators } from 'apiSdk/operators';

function LotteryGameEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<LotteryGameInterface>(
    () => (id ? `/lottery-games/${id}` : null),
    () => getLotteryGameById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: LotteryGameInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateLotteryGameById(id, values);
      mutate(updated);
      resetForm();
      router.push('/lottery-games');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<LotteryGameInterface>({
    initialValues: data,
    validationSchema: lotteryGameValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Lottery Games',
              link: '/lottery-games',
            },
            {
              label: 'Update Lottery Game',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Lottery Game
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.description}
            label={'Description'}
            props={{
              name: 'description',
              placeholder: 'Description',
              value: formik.values?.description,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Jackpot"
            formControlProps={{
              id: 'jackpot',
              isInvalid: !!formik.errors?.jackpot,
            }}
            name="jackpot"
            error={formik.errors?.jackpot}
            value={formik.values?.jackpot}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('jackpot', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="draw_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Draw Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.draw_date ? new Date(formik.values?.draw_date) : null}
              onChange={(value: Date) => formik.setFieldValue('draw_date', value)}
            />
          </FormControl>
          <FormControl id="draw_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Draw Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.draw_time ? new Date(formik.values?.draw_time) : null}
              onChange={(value: Date) => formik.setFieldValue('draw_time', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<OperatorInterface>
            formik={formik}
            name={'operator_id'}
            label={'Select Operator'}
            placeholder={'Select Operator'}
            fetcher={getOperators}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/lottery-games')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'lottery_game',
    operation: AccessOperationEnum.UPDATE,
  }),
)(LotteryGameEditPage);
