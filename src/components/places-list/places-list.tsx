import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PlaceData } from '@/pages/types';
import { Card } from '../cards/cards';

export function PlacesList({ list, basePath }: { list: PlaceData[]; basePath: string }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 16 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {list.map((item) => (
          // <div style={{width: 574, height: 376, backgroundColor: 'black', marginBottom: 20}}></div>
          <Card basePath={basePath} {...item} />
        ))}
      </div>
      {/* <div style={matches ? { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: 20 } : { display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gridGap: 20 }}>
        {list.map((item) => (
          <Card {...item} />
        ))}
      </div> */}
    </div>
  );
}
