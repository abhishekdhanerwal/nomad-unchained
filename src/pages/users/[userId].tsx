import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import fs from 'fs';
import path from 'path';
import util from 'util';
import { ParsedUrlQuery } from 'querystring';

interface StaticPropsContext extends ParsedUrlQuery {
  userId: string;
}

interface Props {
  id: string;
  name: string;
}

export default function UserDetails(user: Props) {
  // Required only if fallback is true
  if (!user.name) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <h1>User Details</h1>
      <h3>{user.name}</h3>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { userId } = context.params as StaticPropsContext;
  const filePath = path.join(process.cwd(), 'src', 'data', 'users.json');
  const jsonData = await util.promisify(fs.readFile)(filePath, 'utf8');
  const data: Props[] = JSON.parse(jsonData);

  const userDetails = data.find((user) => user.id === userId);

  if (!userDetails) {
    return {
      notFound: true,
    };
  }

  return {
    props: userDetails,
  };
};

//next js loads u1.json and u2.json on load own its own before hovering over the
//link or before clicking the link route
// fallback true next js loads params not defined below so for better performance we can
//define only those params which are highly visitd so that they are loaded on browser before hand
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { userId: 'u1' } },
      // { params: { userId: 'u2'} },
    ],
    fallback: 'blocking', // In this case we dont need loading check
    // fallback: true
  };
};
