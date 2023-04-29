import { GetServerSideProps } from 'next';

export default function UserDetailsPage() {
  return <div>Sam</div>;
}

// We dont need getStaticPaths in this case even if pages are dynamic
export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  // const { params, req, res } = context;
  return {
    props: {},
  };
};
