import { Detail } from '@/components/detail/detail';
import { PlaceData } from '@/pages/types';
import { getAcitvitiesList } from '@/utils/data-endpoint';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface StaticPropsContext extends ParsedUrlQuery {
  adventureId: string;
}

export default function AdventureDetails(data: PlaceData) {
  return <Detail {...data} />;
}

export const getStaticProps: GetStaticProps<PlaceData> = async (context) => {
  const { adventureId } = context.params as StaticPropsContext;
  const data = await getAcitvitiesList();
  const selectedAdventue = data.find((item) => item.id === adventureId);

  if (!selectedAdventue) {
    return {
      notFound: true,
    };
  }

  return {
    props: selectedAdventue,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const data = await getAcitvitiesList();
  const pathList = data.map((item) => ({ params: { adventureId: item.id } }));

  return {
    paths: pathList,
    fallback: false,
  };
};
