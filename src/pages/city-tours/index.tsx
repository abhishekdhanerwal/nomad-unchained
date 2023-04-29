import { GetStaticProps } from 'next';

import { HomeProps } from '@/pages/types';
import { PlacesList } from '@/components/places-list/places-list';
import { getCityList } from '@/utils/data-endpoint';

export default function CityTours({ cities }: HomeProps) {
  return (
    <div style={{ backgroundColor: 'rgb(236, 236, 236)' }}>
      <PlacesList basePath='city-tours' list={cities} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getCityList();

  return {
    props: {
      cities: data || [],
    },
  };
};
