import Hero from './hero';
import Services from './services';
import SalesFunnel from './sales-funnel';
import ScrollToTop from './scroll-top';
import { Box } from '@material-ui/core';
import HowTo from './howto';
import { Reviews } from './reviews';

export const Content = () => (
  <Box bgcolor={'#fff'}>
    <Hero />
    <Box component={'main'}>
      <HowTo />
      <SalesFunnel />
      <Reviews/>
      <Services />
      <ScrollToTop />
    </Box>

    <style global jsx>{`
      main>section:nth-child(2n+2) {
        background-color: #fafafa;
      }

      // main:nth-child(odd) {
      //   background-color: #ddd;
      // }
    `}</style>
  </Box>
);

export default Content;
