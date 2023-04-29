import { Box, Button } from '@mui/material';

import { ScrollableSection } from '@/components/scrollable-section/scrollable-section';
import { PlaceData } from '@/pages/types';
import { Info } from './info';


interface Props {
  cities: PlaceData[];
  treks: PlaceData[];
}

export function Home({ cities, treks }: Props) {
  const handleClickScroll = () => {
    const element = document.getElementById('service-section');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Box component='main'>
      <div
        style={{
          width: '100vw',
          backgroundColor: '#D3D3D3',
          height: 'calc(100vh - 80px)',
          position: 'relative',
        }}
      >
        <Button
          color='secondary'
          variant='outlined'
          style={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          onClick={handleClickScroll}
        >
          Wander India Like Never Before
        </Button>
      </div>
      <div id='service-section' style={{ scrollMargin: 84 }}>
        <ScrollableSection
          heading='Popular Destinations'
          subHeading='from historical cities to natural splendours, come see the best of India!'
          viewMoreLink='/city-tours'
          data={cities}
        />
        <ScrollableSection
          heading='Top Treks'
          subHeading=''
          viewMoreLink='/adventure-activities'
          data={treks}
        />
      </div>
      <Info />
      <footer style={{ marginTop: 32, height: 250, backgroundColor: 'lightgray' }}>
        About Info Logo Plus Name Social Media Links
      </footer>
    </Box>
  );
}
