import { OutlinedTimeline } from '@/components/timeline';
import { PlaceData } from '@/pages/types';
import { Box } from '@mui/material';

export function Detail(data: PlaceData) {
  return (
    <>
      <Box sx={{ width: '100vw', height: 450, backgroundColor: 'lightgray' }}></Box>
      <Box style={{ padding: 24, display: 'flex' }}>
        <div style={{ width: '70%' }}>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <div>Booking Form</div>
        </div>
        <div style={{ width: '30%' }}>
          <h4>Facts</h4>
          <OutlinedTimeline list={data.facts} />
        </div>
      </Box>
    </>
  );
}
