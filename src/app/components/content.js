import Hero from './hero';
import Services from './services';
import SalesFunnel from './sales-funnel';
import ScrollToTop from './scroll-top';
import { Box } from '@material-ui/core';
import HowTo from './howto';
import { Reviews } from './reviews';

export const Content = () => (
  <Box bgcolor={'#f1f1f1'}>
    <Hero />
    <Box component={'main'} marginTop={-20}>
      <SalesFunnel />
      <HowTo />
      <Reviews/>
      <Services />
      <ScrollToTop />
    </Box>
  </Box>
);

export default Content;
