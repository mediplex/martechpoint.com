import { Box, Typography, Button } from '@material-ui/core';

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
    paddingBottom={10}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="strech"
    // style={{ minHeight: '66vh' }}
    id="back-to-top-anchor"
    // bgcolor={`#d6d6d6`}
    style={{
      minHeight: `100vh`,

      backgroundImage: `url(https://crazyegg-assets.crazyeggcdn.com/assets/roots/hills-illustration-5daf3415d58f1c01152d1f516fb06eecaf240203c7359fc073befc6699056ffb.svg)`,
      backgroundSize: 'contain',
      backgroundPosition: 'bottom',
      // backgroundImage: `linear-gradient(141deg,#dfd8d9 0,#f5f5f5 71%,#fff 100%)`
      // backgroundColor: '#1a73e8',
      // backgroundImage: `url(https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/designer_life_w96d.svg),url(https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/creativity_wqmm.svg)`,
      // backgroundSize: `380px auto,350px auto`,
      // backgroundPosition: `left -70px bottom -75px,right -50px bottom -50px`,
      // transition: `opacity .15s cubic-bezier(0.4, 0, 0.2, 1)`,
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
        color="textSecondary"
        align={'center'}
        // style={{ color: '#9bc2f5' }}
      >
        {'Without Having To Hire or Rely On A Tech And A Marketing Teams!'}
        {/* {`We help you wrap martech strategy around your business goals and customer experience to drive your growth at scale. `} */}
      </Typography>
    </Box>
    {/* CTA */}
    <Box paddingTop={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Button
          style={{ minHeight: 64, borderRadius: 32 }}
          size="large"
          variant="contained"
          color="primary"
          startIcon={<ArrowForwardIcon />}
        >
          {`I Want To Convert My Visitors To Customers`}
        </Button>
    </Box>
  </Box>
);

export default Hero;
