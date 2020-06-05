import { Box, Typography, Button } from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';
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
      lg: 5,
      xl: 5
    }}
    paddingBottom={10}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="strech"
    id="back-to-top-anchor"
    style={{
      minHeight: `100vh`,

      backgroundImage: `url(/hills-illustration.svg)`,
      backgroundSize: 'contain',
      backgroundPosition: 'bottom',
      backgroundRepeat: `no-repeat`
    }}
  >
    {/* Headline */}
    <Box paddingBottom={2}>
      <Typography gutterBottom variant="h2" component="h1" color="textPrimary" align={'center'}>
        {`Discover How We Can Build Your Sales Funnel That Converts Your Visitors Into Customers.`}
      </Typography>
    </Box>
    {/* Subheadline */}
    <Box paddingBottom={2}>
      <Typography variant="h5" component="h2" color="textSecondary" align={'center'} gutterBottom>
        {'Without Having To Hire or Rely On A Tech And A Marketing Teams!'}
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="center"
      >
        <Box display="flex" alignItems="center" justifyContent="center" marginRight={{lg:1}}>
          <CheckIcon color="primary" />
          <Typography color="textSecondary">We take care of your Marketing Funnel</Typography>
        </Box>
        <Box display="flex"  alignItems="center" justifyContent="center" >
          <CheckIcon color="primary" />
          <Typography color="textSecondary">You Relax and Focus on your Customers</Typography>
        </Box>
      </Box>
    </Box>
    {/* CTA */}
    <Box paddingTop={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <Button
        style={{ minHeight: 64, borderRadius: 32 }}
        size="large"
        variant="contained"
        color="secondary"
        startIcon={<ArrowForwardIcon />}
      >
        {`I Want To Convert My Visitors To Customers`}
      </Button>
    </Box>
  </Box>
);

export default Hero;
