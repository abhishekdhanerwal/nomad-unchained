import Head from 'next/head';
import { Home } from '@/components/home/home';
import { GetStaticProps } from 'next';

import { HomeProps } from '../components/types';
import { getHomeList } from '@/utils/data-endpoint';

export default function HomePage(props: HomeProps) {
  return (
    <div style={{ backgroundColor: '#ececec' }}>
      <Head>
        <title>Wander Soul</title>
      </Head>
      <Home {...props} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const { city, treks } = await getHomeList();
  return {
    props: {
      cities: city.splice(0, 10) || [],
      treks: treks.splice(0, 10) || [],
    },
  };
};
