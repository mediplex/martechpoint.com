import ScrollToTop from './scroll-top';
import { Box } from '@material-ui/core';
import { Hero } from './section/hero';
import { Services } from './section/services';
import { SalesFunnel } from './section/sales-funnel';
import { WhatWorkingWithUsMeansForYou } from './section/what-working-with-us-means-for-you';
import { Reviews } from './section/reviews';
import { CaseStudy } from './section/case-study';

export const Content = () => (
  <Box>
    <Hero />
    <Box component={'main'}>
      <CaseStudy />
      <WhatWorkingWithUsMeansForYou />
      <SalesFunnel />
      <Reviews />
      <Services />
      <ScrollToTop />
    </Box>
  </Box>
);

export default Content;
