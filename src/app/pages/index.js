import Head from 'next/head';
import { Content } from '../components/content';
import appConfig from '../app-config';
import { ComingSoon } from '../components/coming-soon';

export const Home = () => (
  <>
    <Head>
      <title>Martech Point LLC | To Leverage Technology To Enhance The Marketing</title>
    </Head>

    {!appConfig.maintenanceMode ? <Content /> : <ComingSoon />}
  </>
);

export default Home;
