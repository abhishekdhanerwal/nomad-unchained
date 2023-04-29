import { useRouter } from 'next/router';

export default function IndividualEvent() {
  const router = useRouter();
  console.log(router.query);

  const goTo = () => {
    router.push('/events/1/search');
  };

  return (
    <>
      <div>Individual Event</div>
      <button onClick={goTo}>Go To Search Page</button>
    </>
  );
}
