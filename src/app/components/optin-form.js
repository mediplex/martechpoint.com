import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Box, TextField, Button, Typography } from '@material-ui/core';

import LoopIcon from '@material-ui/icons/Loop';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const SubmitButtonIndicator = ({ isSubmitting }) => {
  if (!isSubmitting) return <ArrowForwardIcon />;
  else
    return (
      <>
        <LoopIcon className="loading" />
        <style jsx global>{`
          .loading {
            animation: rotation 4s infinite linear;
          }

          @keyframes rotation {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-359deg);
            }
          }
        `}</style>
      </>
    );
};

export const OptinForm = ({ listId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    email: ''
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required()
  });

  const handleSubmit = async values => {
    setIsSubmitting(true);
    fetch(`https://us-central1-martech-point.cloudfunctions.net/sendEmail`).then(response=>console.log(response));
    // then setIsSubmitting(false);
    // catch errors   
  };

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={values => handleSubmit(values)}>
      {/* {({ errors, touched }) => ( */}
      <Form>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'stretch'}>
          <Field name={'email'}>
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              // meta
            }) => (
              <TextField
                helperText={touched['email'] ? errors['email'] : ''}
                error={touched['email'] && Boolean(errors['email'])}
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder={'Your Best Email Address'}
                label={'Email Address'}
                {...field}
              />
            )}
          </Field>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={<SubmitButtonIndicator isSubmitting={isSubmitting} />}
            style={{ minHeight: 56 }}
            disabled={isSubmitting}
          >
            I Want 50% OFF
          </Button>

          <Typography variant={'caption'} align={`center`}>
            Sign up now to get early notification of our launch date!
          </Typography>
        </Box>
      </Form>
      {/* )} */}
    </Formik>
  );
};
export default OptinForm;
