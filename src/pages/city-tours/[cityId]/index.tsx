import { Detail } from '@/components/detail/detail';
import { PlaceData } from '@/pages/types';
import { getCityList } from '@/utils/data-endpoint';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface StaticPropsContext extends ParsedUrlQuery {
  cityId: string;
}

export default function CityDetails(data: PlaceData) {
  return <Detail {...data} />;
}

export const getStaticProps: GetStaticProps<PlaceData> = async (context) => {
  const { cityId } = context.params as StaticPropsContext;
  const data = await getCityList();
  const selectedCity = data.find((item) => item.id === cityId);

  if (!selectedCity) {
    return {
      notFound: true,
    };
  }

  return {
    props: selectedCity,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const data = await getCityList();
  const pathList = data.map((item) => ({ params: { cityId: item.id } }));

  return {
    paths: pathList,
    fallback: false,
  };
};
