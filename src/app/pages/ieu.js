import {
  Box,
  Typography,
  Button,
  TextField,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  MenuItem
} from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LoopIcon from '@material-ui/icons/Loop';

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const IEU = () => (
  <Box>
    <Box
      component="header"
      px={{
        xs: 2,
        sm: 6,
        md: 8,
        lg: 20,
        xl: 20
      }}
      paddingTop={{
        xs: 2,
        sm: 6,
        md: 8,
        lg: 15,
        xl: 15
      }}
      paddingBottom={{
        xs: 15,
        sm: 15,
        md: 15,
        lg: 15,
        xl: 20
      }}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="strech"
      id="back-to-top-anchor"
      style={{
        minHeight: `100vh`,

        backgroundImage: `url(/hills-illustration-orange-shades.svg)`,
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        backgroundRepeat: `no-repeat`
      }}
    >
      {/* Headline */}
      <Box paddingBottom={0}>
        <Typography
          gutterBottom
          variant="h2"
          component="h1"
          color="textPrimary"
          align={'center'}
          dangerouslySetInnerHTML={{
            __html: `The Moroccan Licence and Master are accepted at Izmir University of Economics in Turkey`
          }}
        />
      </Box>
      {/* Subheadline */}
      <Box paddingBottom={1}>
        <Typography variant="h5" component="h2" color="textSecondary" align={'center'} gutterBottom>
          {'Click on the button bellow to learn more'}
        </Typography>
      </Box>
      {/* CTA */}
      <Box
        paddingTop={5}
        paddingBottom={2}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <CallToAction />
      </Box>
      <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }} alignItems="center" justifyContent="center">
        <Box display="flex" alignItems="center" justifyContent="center" marginRight={{ lg: 1 }}>
          <CheckIcon color="primary" />
          <Typography color="textSecondary">100% acceptance</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" marginRight={{ lg: 1 }}>
          <CheckIcon color="primary" />
          <Typography color="textSecondary">No YÖS/Turkish test required</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <CheckIcon color="primary" />
          <Typography color="textSecondary">No TOEFL/English test required</Typography>
        </Box>
      </Box>
    </Box>
    <Box component={'main'}>
      {/* <CaseStudy />
      <WhatWorkingWithUsMeansForYou />
      <SalesFunnel />
      <Reviews />
      <Services />
      <ScrollToTop /> */}
    </Box>
  </Box>
);

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

const CallToAction = ({ listId, templateId }) => {
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClickOpen = () => {
    console.log('open');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    name: '',
    phone: '',
    email: '',
    language: '',
    program: ''
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required()
  });

  const handleSubmit = async values => {
    setIsSubmitting(true);

    const dataToBeSent = {
      listId,
      templateId,
      lead: {
        email: values.email,
        optinInDate: Date.now()
      }
    };

    console.log(dataToBeSent);

    await import('axios').then(axios => {
      axios
        .post('/handleNewLead', {
          ...dataToBeSent
        })
        .then(response => {
          console.info(response);
        })
        .catch(error => console.error(error))
        .finally(() => setIsSubmitting(false));
    });
  };

  return (
    <>
      <Button
        style={{ minHeight: 64, borderRadius: 32 }}
        size="large"
        variant="contained"
        color="primary"
        startIcon={<ArrowForwardIcon />}
        onClick={handleClickOpen}
      >
        {`I want to learn more now`}
      </Button>

      <Dialog onClose={handleClose} open={open} style={{ padding: 1 }}>
        <DialogTitle>Where do you want us to send you the information?</DialogTitle>
        <DialogContent>
          <Formik initialValues={initialValues} validationSchema={schema} onSubmit={values => handleSubmit(values)}>
            {/* {({ errors, touched }) => ( */}
            <Form>
              <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'stretch'}>
                <Field name={'name'}>
                  {({ field, form: { touched, errors } }) => (
                    <TextField
                      helperText={touched['name'] ? errors['name'] : ''}
                      error={touched['name'] && Boolean(errors['name'])}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      placeholder={'Your Name'}
                      label={'Name'}
                      {...field}
                    />
                  )}
                </Field>
                <Field name={'phone'}>
                  {({ field, form: { touched, errors } }) => (
                    <TextField
                      helperText={touched['phone'] ? errors['phone'] : ''}
                      error={touched['phone'] && Boolean(errors['phone'])}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      placeholder={'Your Best Phone Number'}
                      label={'Phone Number'}
                      {...field}
                    />
                  )}
                </Field>
                <Field name={'email'}>
                  {({ field, form: { touched, errors } }) => (
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
                <Field name={'language'}>
                  {({ field, form: { touched, errors } }) => (
                    <TextField
                      select
                      helperText={touched['language'] ? errors['language'] : ''}
                      error={touched['language'] && Boolean(errors['language'])}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      placeholder={'Prefered communication language'}
                      label={'Prefered Communcation Language'}
                      {...field}
                    >
                    <MenuItem value="English" selected>English</MenuItem>                        
                    <MenuItem value="Arabic">العربية</MenuItem>                        
                    <MenuItem value="French">Français</MenuItem>                        

                    </TextField>
                  )}
                </Field>
                <Field name={'program'}>
                  {({ field, form: { touched, errors } }) => (
                    <TextField
                    select
                      helperText={touched['program'] ? errors['program'] : ''}
                      error={touched['program'] && Boolean(errors['program'])}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      placeholder={'Master Program'}
                      label={'Master Program'}
                      {...field}
                    >
                        <MenuItem value="Select Your Program" disabled selected>Select Your Program</MenuItem>
                        <MenuItem value="Experimental Psychology">Experimental Psychology</MenuItem>
                        <MenuItem value="Financial Economics">Financial Economics</MenuItem>
                        <MenuItem value="Logistics Management">Logistics Management</MenuItem>
                        <MenuItem value="Media and Communication Studies">Media and Communication Studies</MenuItem>
                        <MenuItem value="Private Law Graduate Program">Private Law Graduate Program</MenuItem>
                        <MenuItem value="Marketing Communication and Public Relations">Marketing Communication and Public Relations</MenuItem>
                        <MenuItem value="Political Science and International Relations">Political Science and International Relations</MenuItem>
                        <MenuItem value="Sustainable Energy">Sustainable Energy</MenuItem>
                        <MenuItem value="Design Studies">Design Studies</MenuItem>
                        <MenuItem value="Bioengineering">Bioengineering</MenuItem>
                        <MenuItem value="Computer Engineering">Computer Engineering</MenuItem>
                        <MenuItem value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</MenuItem>
                        <MenuItem value="Industrial Engineering">Industrial Engineering</MenuItem>
                        <MenuItem value="Architecture">Architecture</MenuItem>
                        <MenuItem value="MBA">MBA</MenuItem>
                        <MenuItem value="Executive MBA">Executive MBA</MenuItem>
                    </TextField>
                  )}
                </Field>
              </Box>
            </Form>
            {/* )} */}
          </Formik>
        </DialogContent>
        <DialogActions disableSpacing style={{ justifyContent: 'center' }}>
          <Button
            style={{ minHeight: 64, borderRadius: 32 }}
            size="large"
            variant="contained"
            color="primary"
            startIcon={<ArrowForwardIcon />}
            disabled={isSubmitting}
          >
            {`Send Me More Informations now`}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default IEU;
