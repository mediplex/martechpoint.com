import { Box, Typography, Button, Grow } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const Hero = () => (
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
      xs: 4,
      sm: 6,
      md: 8,
      lg: 10,
      xl: 10
    }}
    paddingBottom={30}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="strech"
    // style={{ minHeight: '66vh' }}
    id="back-to-top-anchor"
    // bgcolor={`#d6d6d6`}
    style={{
      backgroundColor: '#1a73e8',
      backgroundImage: `url(//www.gstatic.com/mobilesdk/190805_mobilesdk/woman-at-desktop@2x.png),url(//www.gstatic.com/mobilesdk/190805_mobilesdk/man-at-desktop@2x.png)`,
      backgroundSize: `380px auto,350px auto`,
      backgroundPosition: `left -70px bottom -75px,right -50px bottom -50px`,
      transition: `opacity .15s cubic-bezier(0.4, 0, 0.2, 1)`,
      backgroundRepeat: `no-repeat`
    }}
  >
    {/* Headline */}
    <Box paddingBottom={2}>
      <Typography
        gutterBottom
        variant="h2"
        component="h1"
        color="textPrimary"
        align={'center'}
        style={{ color: '#fff' }}
      >
        {/* {`Discover How We Can Build Your Sales Funnel That Convert Your Visitors Into Customers.`} */}
        {`Discover How We Can Build Your Sales Funnel That Convert Your Visitors Into Customers.`}
      </Typography>
    </Box>
    {/* Subheadline */}
    <Box paddingBottom={2}>
      <Typography
        variant="h5"
        component="h2"
        // color="textSecondary"
        align={'center'}
        style={{ color: '#9bc2f5' }}
      >
        {'Without Having To Hire or Rely On A Tech And A Marketing Teams!'}
        {/* {`We help you wrap martech strategy around your business goals and customer experience to drive your growth at scale. `} */}
      </Typography>
    </Box>
    {/* CTA */}
    <Box paddingTop={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <Grow in={true}>
        <Button
          style={{ minHeight: 64, borderRadius: 32 }}
          size="large"
          variant="contained"
          color="secondary"
          startIcon={<ArrowForwardIcon />}
        >
          {`I Want To Convert My Visitors To Customers`}
        </Button>
      </Grow>
      {/* <Grow in={true}>
        <Button
          style={{ minHeight: 64, borderRadius: 32 }}
          size="large"
          //  variant="outlined"
          //  color="primary"
          startIcon={<ArrowForwardIcon />}
        >
          {`What Is A Sales Funnel ?`}
        </Button>
      </Grow> */}
    </Box>
  </Box>
);

export default Hero;
