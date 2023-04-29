import { GetStaticProps } from 'next';

import { HomeProps } from '@/components/types';
import { PlacesList } from '@/components/places-list/places-list';
import { getAcitvitiesList } from '@/utils/data-endpoint';

export default function AdventureActivities({ treks }: HomeProps) {
  return (
    <div style={{ backgroundColor: 'rgb(236, 236, 236)' }}>
      <PlacesList basePath='adventure-activities' list={treks} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<{ treks: HomeProps['treks'] }> = async (context) => {
  const data = await getAcitvitiesList();

  return {
    props: {
      treks: data || [],
    },
  };
};
