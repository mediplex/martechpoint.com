import { Box, Container, Grid, Typography, Button, ButtonGroup, Paper } from '@material-ui/core';

import { OptinForm } from './optin-form';

export const ComingSoon = () => {
  return (
    <Box
      style={{
        // minHeight: '100vh',
        // backgroundColor: '#1a73e8',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='50%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23f1f1f1'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='70%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23ffffff'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='.8'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: `cover`,
        backgroundAttachment: `fixed`,
        backgroundRepeat: `no-repeat`
        // backgroundPosition: `left -70px bottom -75px,right -50px bottom -50px`,
        // transition: `opacity .15s cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      <Container maxWidth="md">
        <Box
          pt={6}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          style={{
            minHeight: '100vh'
          }}
        >
          <Box pb={8}>
            {/* Logo */}
            <Box
              component="header"
              paddingBottom={8}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Paper
                style={{
                  backgroundColor: '#3a3a3a'
                }}
              >
                <Box padding={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <img src="/martechpoint-logo.png" alt="logo" height={57} width={300} style={{}} />
                </Box>
              </Paper>
            </Box>

            {/* Headline */}
            <Box paddingBottom={2}>
              <Typography gutterBottom variant="h2" component="h1" color="textPrimary" align={'center'}>
                {`Sign Up To Get Notified When We Comeback And Get 50% OFF On All Our Services`}
              </Typography>
            </Box>

            {/* Subheadline */}
            <Box paddingBottom={6}>
              <Typography variant="h5" component="h2" color="textSecondary" align={'center'}>
                {`Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank
        you for you patience.`}
              </Typography>
            </Box>

            {/* CTA */}
            <Grid container display={'flex'} justify={'center'} alignItems={'center'}>
              <Grid item xs={12} lg={6}>
                <OptinForm listId={'coming-soon'} templateId={`0001`} />
              </Grid>
            </Grid>
          </Box>

          <Box component="footer" justifySelf="flex-end">
            <Typography variant={'body2'}>Copyright 2018-2020 Martech Point LLC</Typography>
            <ButtonGroup variant="text" size="small">
              {/* <Link href={'/terms-of-service'}> */}
              <Button>Terms of Service</Button>
              {/* </Link> */}
              {/* <Link href={'/privacy-policy'}> */}
              <Button>Privacy Policy</Button>
              {/* </Link> */}
            </ButtonGroup>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ComingSoon;
