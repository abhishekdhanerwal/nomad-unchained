import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import fs from 'fs';
import path from 'path';
import util from 'util';
import Link from 'next/link';

interface Props {
  users: {
    id: string;
    name: string;
  }[];
}

export default function UserDetails({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      Users List
      <ul>
        {users.map((item) => (
          <Link key={item.id} href={`/users/${item.id}`}>
            <li key={item.id}>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

// It runs before the component runs
export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { params } = context;
  // If true page redirects to 404 page not found
  if (false) {
    return {
      notFound: true,
    };
  }

  //If true page redirects to destination route
  if (false) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const filePath = path.join(process.cwd(), 'src', 'data', 'users.json');
  const jsonData = await util.promisify(fs.readFile)(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  return {
    props: {
      users: data,
      // [
      //     {
      //         id: 'p1',
      //         name: 'Product 1'
      //     }
      // ]
    },
    revalidate: 10, //Incremental Static Generation after each X seconds, it doesnt matter on dev server, as it reloads data on every refresh
  };
};
