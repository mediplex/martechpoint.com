import Hero from './hero';
import Services from './services';
import SalesFunnel from './sales-funnel';
import ScrollToTop from './scroll-top';
import { Box } from '@material-ui/core';
import HowTo from './howto';

export const Content = () => (
  <Box bgcolor={'#f1f1f1'}>
    <Hero />
    <Box component={'main'} marginTop={-15}>
      <SalesFunnel />
      <HowTo />
      <Services />
      <ScrollToTop />
    </Box>
  </Box>
);

export default Content;
